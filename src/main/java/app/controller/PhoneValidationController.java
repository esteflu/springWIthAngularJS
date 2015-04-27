package app.controller;

import app.model.JSONResponse;
import app.service.PhoneValidator;
import app.service.PhoneValidatorImpl;
import app.service.PhoneValidatorResponse;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import static com.google.i18n.phonenumbers.PhoneNumberUtil.*;

/**
 * Created by stefanlundberg on 15-04-16.
 */

@Controller
@RequestMapping("/validate")
public class PhoneValidationController {

    @Autowired
    PhoneValidatorImpl phoneValidator;

    @Autowired
    PhoneValidatorResponse response;

    @RequestMapping(
            value = "/{number}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE )

    public ResponseEntity<JSONResponse> validatePhoneNumber(@PathVariable("number") String number) {

        if(!phoneValidator.isValidPhoneNumber(number, getCountryISO2(number))) {
            return response.getBadRequest(new JSONResponse(number, getCountryISO2(number), null));
        }
        return response.getOKResponse(new JSONResponse(number, getCountryISO2(number), getPhoneNumberType(number)));
    }

    private PhoneNumberType getPhoneNumberType(String number) {
        if (phoneValidator.isFixedNumber(number, getCountryISO2(number))) {
            return PhoneNumberType.FIXED_LINE;
        } else if (phoneValidator.isMobileNumber(number, getCountryISO2(number))) {
            return PhoneNumberType.MOBILE;
        } else {
            return PhoneNumberType.FIXED_LINE_OR_MOBILE;
        }
    }

    private String getCountryISO2(String number) {
        //TODO fix better fail management
        if (number.length() > 4)
            return phoneValidator.getCountryISO2FromPhoneNumber(number);
        return "number too short";
    }
}
