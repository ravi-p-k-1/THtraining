const userNamePattern = /^[a-zA-Z]{3,10}$/;
const lastNamePattern = /^[A-Z][a-z]{1,10}$/;
const firstNamePattern = /^[A-Z][a-z]{1,10}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
const contactPattern = /^[0-9]{10}$/;

const registerPageRegex = {userNamePattern, lastNamePattern, firstNamePattern, passwordPattern, contactPattern};

export default registerPageRegex;