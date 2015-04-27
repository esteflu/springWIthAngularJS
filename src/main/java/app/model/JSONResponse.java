package app.model;

import com.google.i18n.phonenumbers.PhoneNumberUtil;

import static com.google.i18n.phonenumbers.PhoneNumberUtil.*;

/**
 * Created by stefanlundberg on 15-04-16.
 */

public class JSONResponse {

    private final String number;
    private final String countryISO2;
    private final PhoneNumberType type;

    public JSONResponse(String number, String countryISO2, PhoneNumberType type) {
        this.number = number;
        this.countryISO2 = countryISO2;
        this.type = type;
    }

    public String getNumber() {
        return number;
    }

    public String getCountryISO2() {
        return countryISO2;
    }

    public PhoneNumberType getType() {
        return type;
    }
}
