import * as yup from 'yup';

const AdminLoginSchema = yup.object().shape({
  username: yup.string().required('Istifadeci adı lazimdir'),
  password: yup.string().required('Şifre lazimdir'),
});
export default AdminLoginSchema