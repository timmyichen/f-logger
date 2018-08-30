
function isNotEmpty(str) {
  return {
    valid: str.trim().length !== 0,
    errorMsg: 'cannot be empty',
  };
}

const isEmailRegex = /\S+@\S+\.\S+/;

function isEmail(email) {
  return {
    valid: !!isEmailRegex.test(email.toLowerCase()),
    errorMsg: 'must be a valid email address',
  };
}

function isAtLeastLength(str, len) {
  return {
    valid: str.length >= len,
    errorMsg: `must have length of at least ${len} characters`
  };
}

export default {
  isNotEmpty,
  isEmail,
  isAtLeastLength,
};
