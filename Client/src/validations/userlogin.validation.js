import * as yup from 'yup';

const UserLoginSchema = yup.object().shape({
  username: yup.string().required('Istifadeci adı lazimdir'),
  email: yup.string().required('Istifadeci adı lazimdir'),
  password: yup.string().required('Şifre lazimdir'),
});
export default UserLoginSchema