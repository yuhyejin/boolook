enum ResponseCode {
    // HTTP Status 200
    SUCCESS = "SU",

    // HTTP Status 400
    VALIDATION_FAILED = "VF",
    DUPLICATE_ID = "DI",
    DUPLICATE_NICKNAME = "DN",
    NOT_EXISTED_USER = "NU",
    NOT_EXISTED_FAVORITE = "NF",

    // HTTP Status 401
    SIGN_IN_FAIL = "SF",
    AUTHORIZATION = "AF",

    // HTTP Status 403
    NO_PERMISSION = "NP",

    // HTTP Status 403
    DATABASE_ERROR = "DBE",


}

export default ResponseCode;