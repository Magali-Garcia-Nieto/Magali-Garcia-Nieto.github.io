import React, { Component } from 'react';
import About from "./About";
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import NavBarcollapsible from './NavbarCollapsible';
import GitSection from './GitSection';

import aboutContent from '../content/aboutContent';
import skillsContent from '../content/skillsContent';
import educationContent from '../content/educationContent';
import workExperienceContent from '../content/workExperienceContent';
import navBarContent from '../content/navBarContent';
import contactContent from '../content/contactContent';
import gitContent from '../content/gitContent';

import useLocalStorage from './useLocalStorage';


var index= 0;

function Home () {
    var [chosenLanguage, setNewLanguage] = useLocalStorage("language", "en");

    chosenLanguage === "en" ? index = 0 : index = 1;

    var aboutItem = aboutContent[index];
    var skillsItem = skillsContent[index];
    var educationItem = educationContent[index];
    var workExperienceItem = workExperienceContent[index];
    var navBarItem = navBarContent[index];
    var contactItem = contactContent[index];
    var gitItem = gitContent[index];

        return (
            <section id="home">

                <NavBarcollapsible 
                    key = {navBarItem.key}
                    homeButton = {navBarItem.homeButton}
                    skillsButton = {navBarItem.skillsButton}
                    educationButton = {navBarItem.educationButton}
                    experienceButton = {navBarItem.experienceButton}
                    contactButton = {navBarItem.contactButton}
                    englishButton = {navBarItem.englishButton}
                    spanishButton = {navBarItem.spanishButton}
                />

                <section  id="about" className="container-style">
                    <About
                        key={aboutItem.key}
                        aboutSubTitle= {aboutItem.aboutSubTitle}
                        aboutp1 = {aboutItem.aboutp1}
                        aboutp2 = {aboutItem.aboutp2}
                        aboutp3 = {aboutItem.aboutp3}
                    />  
                </section>

                <section id="skills" className="container-skills">
                    <Skills 
                        key={skillsItem.key}
                        coderTitle = {skillsItem.coderTitle}
                        architectTitle = {skillsItem.architectTitle}
                        softTitle = {skillsItem.softTitle}
                        softSkillsp = {skillsItem.softSkillsp}
                        englishTitle = {skillsItem.englishTitle}
                        readingWritingp1 = {skillsItem.readingWritingp1}
                        readingWritingp2 = {skillsItem.readingWritingp2}
                        oralp1 = {skillsItem.oralp1}
                        oralp2 = {skillsItem.oralp2}
                    />
                </section>

                <section id="education" >
                    <Education 
                        key={educationItem.key}
                        universityTitle ={educationItem.universityTitle}
                        universitySubTitle ={educationItem.universitySubTitle}
                        universityp1 ={educationItem.universityp1}
                        coursesTitle ={educationItem.coursesTitle}
                        coursesDatep1 ={educationItem.coursesDatep1}
                        coursesDatep2 ={educationItem.coursesDatep2}
                    />
                </section>

                <section id="gitRepository" className="container-style">
                    <GitSection 
                        key ={gitItem.key}
                        gitTitle1 = {gitItem.gitTitle1}
                        gitp1 = {gitItem.gitp1}
                        gita1 = {gitItem.gita1}
                        gitp2 = {gitItem.gitp2}
                    />
                </section>

                <section id="experience" className="container-style">
                    <Experience 
                        key ={workExperienceItem.key}
                        workExperienceTitle ={workExperienceItem.workExperienceTitle}
                        experienceTitle1 ={workExperienceItem.experienceTitle1}
                        experienceDate1 ={workExperienceItem.experienceDate1}
                        experiencep1 ={workExperienceItem.experiencep1}
                        experienceTitle2 ={workExperienceItem.experienceTitle2}
                        experienceDate2 ={workExperienceItem.experienceDate2}
                        experiencep2 ={workExperienceItem.experiencep2}
                        experienceTitle3 ={workExperienceItem.experienceTitle3}
                        experienceDate3 ={workExperienceItem.experienceDate3}
                        experiencep3 ={workExperienceItem.experiencep3}
                        experienceTitle4 ={workExperienceItem.experienceTitle4}
                        experienceDate4 ={workExperienceItem.experienceDate4}
                        experiencep4 ={workExperienceItem.experiencep4}
                    />
                </section>

                

                <section id="contact" >
                    <Contact 
                        key ={contactItem.key}
                        contactTitle1 ={contactItem.contactTitle1}
                        contactCellphone ={contactItem.contactCellphone}
                        contactTitle2 ={contactItem.contactTitle2}
                        contactp ={contactItem.contactp}
                    />
                </section> 

             <Footer />
            </section>
        );

    }



export default Home;
