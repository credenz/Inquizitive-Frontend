import React from 'react';
import Card from './Card.js';
import './Team.css';

const Ourteam = () => {
    return (
        <div id="contain">
            <section id="team">
                <div class="container py-2 text-center">
                    <div class="row pb-5">
                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/suyash.jpeg').default}
                                team='Front-end developer'
                                name='Suyash Joshi'
                                github='https://github.com/SuyashJoshi179'
                                linkedin='https://www.linkedin.com/in/suyash-joshi/'
                                mail='mailto:suyash.joshi179@gmail.com' />
                        </div>

                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/pushkar.jpeg').default}
                                team='Front-end developer'
                                name='Pushkar Lonkar'
                                github='https://github.com/Pushkarlonkar'
                                linkedin='https://www.linkedin.com/in/pushkarlonkar'
                                mail='mailto:pushkar.lonkar21@gmail.com'
                            />
                        </div>

                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/rohit.jpeg').default}
                                team='Front-end developer'
                                name='Rohit James'
                                github='https://github.com/rohit-james12'
                                linkedin='https://www.linkedin.com/in/rohit-james-6b93b4195/'
                                mail='mailto:rohitjames89@gmail.com'
                            />
                        </div>

                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/ashwaq.png').default}
                                team='Front-end developer'
                                name='Ashwaq Khazi'
                                github='https://github.com/khaziashwaq'
                                linkedin='https://www.linkedin.com/in/ashwaq-khazi-20a8811a7/'
                                mail='mailto:ashwaqkhazi1729@gmail.com'
                            />
                        </div>
                    </div>
                    <div class="row pb-5">
                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/iliyas.jpeg').default}
                                team='Back-end developer'
                                name='Ilyas Ali'
                                github='https://github.com/ilyas-ali/'
                                linkedin='https://www.linkedin.com/in/ilyas-ali-7730a31a0'
                                mail='mailto:ilyashussain14@gmail.com'
                            />
                        </div>

                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/aman.jpeg').default}
                                team='Back-end developer'
                                name='Amaan Naikwadi'
                                github='https://github.com/AmaanNaikwadi'
                                linkedin='https://www.linkedin.com/in/amaan-naikwadi-022523151'
                                mail='mailto:amaannaikwadi@gmail.com'
                            />
                        </div>

                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/sameer.jpeg').default}
                                team='Back-end developer'
                                name='Sameer Memon'
                                github='https://github.com/sameer1604'
                                linkedin='https://www.linkedin.com/in/sameer-memon-0019ab1a9'
                                mail='mailto:memonsameer4@gmail.com'
                            />
                        </div>
                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/avantika.jpeg').default}
                                team='Questions Setter'
                                name='Avantika Patil'
                                mail='mailto:patilavantika168@gmail.com'
                            />
                        </div>
                    </div>
                    <div class="row pb-5">


                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/atharva.jpeg').default}
                                team='Questions Setter'
                                name='Atharva Savdekar'
                                github='https://github.com/atharvas21'
                                linkedin='https://www.linkedin.com/in/atharva-savdekar-981886191/'
                                mail='mailto:atharvasavdekar21@gmail.com'
                            />
                        </div>

                        <div class="col-lg-3 col-md-4 pl-4 pr-4 py-5">
                            <Card imgsrc={require('../../images/abhishek.jpeg').default}
                                team='Questions Setter'
                                name='Abhishek Kulkarni'
                                github='https://github.com/abhishekkulkarni59'
                                linkedin='https://www.linkedin.com/in/abhishek-kulkarni-3b848129'
                                mail='mailto:abhishekkulkarni59@gmail.com'
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ourteam;

