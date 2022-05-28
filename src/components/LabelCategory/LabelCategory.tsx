import style from './LabelCategory.module.scss';

const LabelCategory = ({ categories }) => {
  const formattedLabelCategories = categories?.join(' > ');

  return <div className={style.LabelCategoryContainer}>{formattedLabelCategories}</div>;
};

export default LabelCategory;
