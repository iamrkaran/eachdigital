type SignupFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type SignupResponse = {
    message: string;
  };
  
  type ErrorResponse = {
    message: string;
  };

// Path: src/types/formdata.ts

type LoginFormData = {
  email: string;
  password: string;
};
