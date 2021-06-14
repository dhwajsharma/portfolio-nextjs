import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm, <br />
        Dhwaj Sharma
      </SectionTitle>
      <SectionText>
        Front-End Dev
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;