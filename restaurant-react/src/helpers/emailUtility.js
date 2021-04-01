/* eslint-disable import/no-anonymous-default-export */
import string from "./stringUtility";

export default {
    test(email) {
        return /^[A-Za-z0-9!#$%&'*+-/=?^_`{|}~]+@[A-Za-z0-9-]+(.[A-Za-z0-9-]+)*$/.test(email);
    },
    isValid(email) {
        return string.isNullOrEmpty(email) || this.test(email);
    }
}