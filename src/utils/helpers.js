export const getErrorData = (error) => {
  if (process.env.NODE_ENV === 'development') {
    if (!error.response) {
      return null;
    }
    if (error.response.data) {
      console.error(error.response.data);
    }
    console.error(error.response.status);
    console.error(error.response.headers);
  }

  if (error.response.data && error.response.data.errors) {
    return error.response.data.errors;
  }

  return null;
};

export const getErrorMessage = (error) => {
  const errorMessage = 'Ошибка API, попробуйте еще раз.';

  if (error.name === 'Fetch User') {
    return error.message;
  }

  if (!error.response) {
    console.error(`API ${error.config.url} не найден`);
    return errorMessage;
  }

  return errorMessage;
};
