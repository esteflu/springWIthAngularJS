package app.service;

import org.springframework.stereotype.Component;

/**
 * Created by stefanlundberg on 15-04-22.
 */


//TODO real implemenations for all methods
@Component
public class PhoneValidatorImpl implements PhoneValidator{
    @Override
    public String getCountryISO2FromPhoneNumber(String phoneNumber) {
        return null;
    }

    @Override
    public String getSanitizedPhoneNumber(String phoneNumber, String countryISO2) {
        return null;
    }

    @Override
    public boolean isMobileNumber(String phoneNumber, String countryISO2) {
        return false;
    }

    @Override
    public boolean isFixedOrMobileNumber(String phoneNumber, String countryISO2) {
        return false;
    }

    @Override
    public boolean isFixedNumber(String phoneNumber, String countryISO2) {
        return false;
    }

    @Override
    public boolean isValidInternationalPhoneNumber(String phoneNumber) {
        return false;
    }

    @Override
    public boolean isValidPhoneNumber(String phoneNumber, String countryISO2) {
        return false;
    }

    @Override
    public String toString() {
        return this.getClass().toString();
    }
}
