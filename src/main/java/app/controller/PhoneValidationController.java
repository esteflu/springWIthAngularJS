package app.controller;

import app.model.JSONResponse;
import app.service.PhoneValidatorImpl;
import app.service.PhoneValidatorResponse;
import org.springframework.beans.factory.annotation.Autowired;
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

        try {
            return getResponseEntity(number);

        } catch (NullPointerException e) {
            e.printStackTrace();
            return response.getBadRequestResponse(new JSONResponse(number, null, PhoneNumberType.UNKNOWN));
        }
    }

    private ResponseEntity<JSONResponse> getResponseEntity(@PathVariable("number") String number) {
        String countryISO2 = getCountryISO2(number);

        if(!phoneValidator.isValidPhoneNumber(number, countryISO2)) {
            return response.getBadRequestResponse(new JSONResponse(number, countryISO2, PhoneNumberType.UNKNOWN));
        }
        return response.getOKResponse(new JSONResponse(number, countryISO2, getPhoneNumberType(number)));
    }

    private PhoneNumberType getPhoneNumberType(String number) {
        String countryISO2 = getCountryISO2(number);

        if (phoneValidator.isFixedNumber(number, countryISO2)) {
            return PhoneNumberType.FIXED_LINE;
        } else if (phoneValidator.isMobileNumber(number, countryISO2)) {
            return PhoneNumberType.MOBILE;
        } else {
            return PhoneNumberType.FIXED_LINE_OR_MOBILE;
        }
    }

    private String getCountryISO2(String number) {
        return phoneValidator.getCountryISO2FromPhoneNumber(number);
    }
}
