package app.model;

/**
 * Created by stefanlundberg on 15-04-16.
 */
public class JSONResponse {

    private final String number;

    public JSONResponse(String number) {
        this.number = number;
    }

    public String getNumber() {
        return number;
    }
}
