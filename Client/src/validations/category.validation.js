import * as yup from 'yup';

const CategorySchema = yup.object().shape({
  name: yup.string()
    .required('Kategori adı lazimdir')
    .matches(/^[A-Za-z]+$/, 'Kategori adı ancaq herflerden ibaret olmalidir')

});
export default CategorySchema