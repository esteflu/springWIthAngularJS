package app.controller;

import app.model.JSONResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by stefanlundberg on 15-04-16.
 */

@Controller
@RequestMapping("/validate")
public class ValidationController {

    @RequestMapping(
            value = "/{number}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE )

    public ResponseEntity<JSONResponse> validatePhoneNumber(@PathVariable("number") String number) {
        System.out.println("number" + number);
        return new ResponseEntity<JSONResponse>(new JSONResponse(number), HttpStatus.OK);
    }
}
