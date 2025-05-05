const HTTPExceptionHandler = (error) => {
    switch (error.response.status) {
      case 400:
        console.log('Bad Request');
        break;
      case 401:
        console.log('Unauthorized');
        break;
      case 403:
        console.log('Forbidden');
        break;
      case 404:
        console.log('Not Found');
        break;
      case 500:
        console.log('Internal Server Error');
        break;
      default:
        console.log('Something went wrong');
        break;
    }
  };
  
  export { HTTPExceptionHandler };
  