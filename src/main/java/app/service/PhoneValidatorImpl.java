package app.service;

import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import org.springframework.stereotype.Component;
import com.google.i18n.phonenumbers.Phonenumber.PhoneNumber;

/**
 * Created by stefanlundberg on 15-04-22.
 */

@Component
public class PhoneValidatorImpl implements PhoneValidator{

    private static PhoneNumberUtil phoneNumberUtil = PhoneNumberUtil.getInstance();

    @Override
    public String getCountryISO2FromPhoneNumber(String phoneNumber) {
        PhoneNumber parsedNumber = parsePhoneNumber(phoneNumber, "-");
        return phoneNumberUtil.getRegionCodeForNumber(parsedNumber);
    }

    @Override
    public String getSanitizedPhoneNumber(String phoneNumber, String countryISO2) {
        PhoneNumber parsedNumber = parsePhoneNumber(phoneNumber, countryISO2);
        return "+" + Integer.toString(parsedNumber.getCountryCode()) + Long.toString(parsedNumber.getNationalNumber());
    }

    @Override
    public boolean isMobileNumber(String phoneNumber, String countryISO2)  {
        PhoneNumber parsedNumber = parsePhoneNumber(phoneNumber, countryISO2);
        return phoneNumberUtil.getNumberType(parsedNumber).equals(PhoneNumberUtil.PhoneNumberType.MOBILE);
    }

    @Override
    public boolean isFixedOrMobileNumber(String phoneNumber, String countryISO2) {
        PhoneNumber parsedNumber = parsePhoneNumber(phoneNumber, countryISO2);
        return phoneNumberUtil.getNumberType(parsedNumber).equals(PhoneNumberUtil.PhoneNumberType.FIXED_LINE_OR_MOBILE);
    }

    @Override
    public boolean isFixedNumber(String phoneNumber, String countryISO2) {
        PhoneNumber parsedNumber = parsePhoneNumber(phoneNumber, countryISO2);
        return phoneNumberUtil.getNumberType(parsedNumber).equals(PhoneNumberUtil.PhoneNumberType.FIXED_LINE);
    }

    @Override
    public boolean isValidInternationalPhoneNumber(String phoneNumber) {
        try {
            PhoneNumber number = phoneNumberUtil.parse(phoneNumber, "-");
            String country = phoneNumberUtil.getRegionCodeForNumber(number);
            return phoneNumberUtil.isValidNumberForRegion(number, country);
        } catch (NumberParseException e) {
            return false;
        }
    }

    @Override
    public boolean isValidPhoneNumber(String phoneNumber, String countryISO2) {
        PhoneNumber number = parsePhoneNumber(phoneNumber, countryISO2);
        if (number != null) {
            return phoneNumberUtil.isValidNumberForRegion(number, countryISO2);
        }
        return false;
    }

    private PhoneNumber parsePhoneNumber(String phoneNumber, String countryISO2) {
        try {
            return phoneNumberUtil.parse(phoneNumber, countryISO2);
        } catch (NumberParseException e) {
            e.printStackTrace();
        }
        return null;
    }
}
