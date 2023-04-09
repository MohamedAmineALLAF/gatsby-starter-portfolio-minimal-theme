import React, { useEffect, useState } from "react";
import {
  AboutSection,
  Animation,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  LegalSection,
  Page,
  ProjectsSection,
  Section,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { ArticleCardSkeleton } from "gatsby-theme-portfolio-minimal/src/components/ArticleCard";
import { Button, Card, Col, Row, Tabs ,Typography} from "antd";
import { useMediaQuery } from 'react-responsive';
import { ButtonType } from "gatsby-theme-portfolio-minimal/src/components/Button";
import { SocialProfiles } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Hero/data";
import {
  CodeOutlined ,
  StepForwardOutlined ,
  CodepenOutlined,
  DatabaseOutlined,
  GatewayOutlined,
  FolderOutlined
} from '@ant-design/icons';





const { Title } = Typography;

const { TabPane } = Tabs;


export default function IndexPage() {
  const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0];

    const isMobile = useMediaQuery({ query: '(min-width: 600px)' })

    const [tabPosition, setTabPosition] = useState('left');
    const [layout, setLayout] = useState('center');

    useEffect(() => {
      // Update tabposition state whenever isMobile changes
      setTabPosition(isMobile ? 'left' : 'top');
      setLayout(isMobile ? '' : 'center');
      console.log(layout);
    }, [isMobile]);


  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        
        <Animation type="fadeUp">
                

                <Section heading="Experience" anchor="experience">
                    <div style={{
                      display: 'flex',
                      flexDirection:'row',
                      justifyContent:'space-around'
                    }}>
                    <Tabs defaultActiveKey="1"
    tabPosition={tabPosition}
    
     style={{
  fontFamily:'Roboto',
  fontWeight:500,
  fontSize:'large',
}}>
        <TabPane tab="LATI AGRO" key="1">
          <h1>Full Stack Developer @LATI AGRO</h1>
          <p>February 2022 - August 2022</p>
          

<ul style={{
                          listStyle:'square'
                        }}>
                          <li>Built and maintained e-commerce app code using Laravel, Livewire, MySQL, Git, and Github</li>
                          <li>Manually tested sites on multiple browsers and devices for cross-browser compatibility and responsiveness.</li>
                          
                          
                        </ul>

        </TabPane>
        <TabPane tab="ARKAS Maroc" key="2">
        <h1>Full Stack Developer @ARKAS </h1>
          <p>July 2022 - September 2022</p>
          

<ul style={{
                          listStyle:'square'
                        }}>
                          <li>Built an Inventory Management Application using Spring, Hibernate ,MySQL and Thymeleaf.</li>
                          <li>Based on an existing dataset for the company.</li>
                          
                          
                        </ul>
        </TabPane>
        <TabPane tab="BANQUE POPULAIRE" key="3">
        <h1>Business Intelligence Intern @BCP</h1>
          <p>January 2022 - February 2022</p>
          

<ul style={{
                          listStyle:'square'
                        }}>
                          <li>Comparative Study of Open Source Business Intelligence Tools</li>
                          <li>Focus on evaluating the tools based on features, functionality, ease of use and support</li>
                          
                          
                        </ul>
        </TabPane>
      </Tabs>
                    </div>
                   



                   
                </Section>

                <Section heading="Technologies & tools" anchor="technologies" style={{
                  fontFamily:'Roboto',
                  
                }}>
                <Row  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center',
                    fontFamily:'Roboto',
                  }}>
                  <Col xs={24} lg={8} md={12} style={{
                    marginBottom:'5px',
                    fontFamily:'Roboto',

                  }}>
                  <Card style={{ width: 300,
                      textAlign:'center',
                      border:0,
                      fontFamily:'Roboto',
                       }}>
                        <CodeOutlined style={{
                          fontSize:'45px',
                          
                        }} />
                        <h4>Programming Languages</h4>
                        
                          <li style={{
                            fontSize:'17px'
                          }}>JavaScript</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Java</li>
                          <li style={{
                            fontSize:'17px'
                          }}>PHP</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Python</li>
                        
                          
                          
                        
                      </Card>
                  </Col>
                  <Col xs={24} lg={8} md={12} style={{
                    marginBottom:'4px'
                  }}>
                  <Card style={{ width: 300,
                      textAlign:'center',
                      border:0,
                      fontFamily:'Roboto',
                       }}>
                        
                        <CodepenOutlined style={{
                          fontSize:'45px',
                          
                        }} />
                        <h4>Libraries & Frameworks</h4>
                        
                          <li style={{
                            fontSize:'17px'
                          }}>React</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Gatsby</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Spring Boot</li>
                          
                          <li style={{
                            fontSize:'17px'
                          }}>Node.js / Express</li>
                          
                        
                          
                          
                        
                      </Card>
                  </Col>
                  <Col xs={24} lg={8} md={12} style={{
                    marginBottom:'4px'
                  }}>
                  <Card  style={{ width: 300,
                      textAlign:'center',
                      border:0,
                      fontFamily:'Roboto',
                       }}>
                        
                        <DatabaseOutlined  style={{
                          fontSize:'45px',
                          
                        }} />
                        <h4>Databases & DevOps</h4>
                        
                          <li style={{
                            fontSize:'17px'
                          }}>MySQL</li>
                          <li style={{
                            fontSize:'17px'
                          }}>MongoDB</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Docker</li>
                          <li style={{
                            fontSize:'17px'
                          }}>MS SQL Server</li>
                          
                      </Card>
                  </Col>
                  <Col  xs={24} lg={12} md={12} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center',
                    marginBottom:'4px'
                  }}>
                  <Card style={{ width: 300,
                          textAlign:'center',
                          border:0,
                          fontFamily:'Roboto',
                       }}>
                        
                        <GatewayOutlined style={{
                          fontSize:'45px',
                          
                        }} />
                        <h4>Conception & Architectures:</h4>
                        
                          <li style={{
                            fontSize:'17px'
                          }}>UML</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Merise</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Design Patterns</li>
                                               
                          
                          
                        
                      </Card>    
                  </Col>
                  <Col xs={24} lg={12} md={12} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center',
                    marginBottom:'4px'
                  }} >
                  <Card style={{ width: 300,
                      textAlign:'center',
                      border:0,
                      fontFamily:'Roboto',
                       }}>
                        
                       
                        <FolderOutlined style={{
                          fontSize:'45px',
                          
                        }} />
                        <h4>Version Control</h4>
                        
                          <li style={{
                            fontSize:'17px'
                          }}>Git</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Github</li>
                          <li style={{
                            fontSize:'17px'
                          }}>Gitlab</li>
                      </Card>
                  </Col>
                </Row>
                </Section>

                

            </Animation>

            <ProjectsSection sectionId="projects" heading="Projects" />

            <Animation type="fadeUp">
                

                <Section heading="Get in Touch" anchor="contact">
                    <p style={{
                      textAlign:'justify',
                      maxWidth:'800px'
                    }}>Currently seeking new opportunities and open to any inquiries. If you have any questions or would like to connect, please feel free to reach out to me. I am highly motivated to explore new opportunities and will do my best to respond promptly.</p>

<Animation type="fadeIn">
{data.socialProfiles && (
                            <SocialProfiles from={data.socialProfiles.from} showIcon={data.socialProfiles.showIcons} />
                        )}
                    </Animation>



                   
                </Section>

                

            </Animation>
        
        
        
        
      </Page>
    </>
  );
}
