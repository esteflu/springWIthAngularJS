package app.service;

import app.model.JSONResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

/**
 * Created by stefanlundberg on 15-04-27.
 */

@Component
public class PhoneValidatorResponse {

    public ResponseEntity<JSONResponse> getOKResponse(JSONResponse response) {
        return new ResponseEntity<JSONResponse>(response, HttpStatus.OK);
    }

    public ResponseEntity<JSONResponse> getBadRequest(JSONResponse response) {
        return new ResponseEntity<JSONResponse>(response, HttpStatus.BAD_REQUEST);
    }
}
