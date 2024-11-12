type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h5 className='text-[32px] text-mainPrimaryColor font-semibold'>{title}</h5>;
};

export default SectionTitle;
