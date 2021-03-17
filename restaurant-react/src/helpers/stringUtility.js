/* eslint-disable import/no-anonymous-default-export */
export default {
    isNullOrEmpty(value) {
        if (value === undefined || value === null || value === "") {
            return true;
        } else {
            return false;
        }
    },
    isNullOrWhiteSpace(value) {
        return this.isNullOrEmpty(value) || value.replace(/\s/g, '').length < 1;
    }
}