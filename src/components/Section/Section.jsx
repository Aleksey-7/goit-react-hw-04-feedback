import PropTypes from 'prop-types';
import { SectionItem, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionItem>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionItem>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
