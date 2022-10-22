import PropTypes from 'prop-types';
import { TitleStatistics } from './Section.module';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <TitleStatistics>{title}</TitleStatistics>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
