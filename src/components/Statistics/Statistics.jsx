import PropTypes from 'prop-types';
import { Title, Item, Section,List,Label,Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        
        <Section>
            {title && <Title >{title}</Title>}

            <List>
                {stats.map((stat) => (
                    <Item key={stat.id} >
                        <Label>{stat.label}</Label>
                        <Percentage>{stat.percentage}%</Percentage>
                    </Item>)
                    
                )}
            </List>

        </Section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
  })),
};