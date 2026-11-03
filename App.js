import React, {useState} from 'react';
import {View, Text, ScrollView, Button, Alert} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Question from './components/Question';

const MyApp = () => {

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [answer6, setAnswer6] = useState('');
  const [answer7, setAnswer7] = useState('');
  const [answer8, setAnswer8] = useState('');
  const [answer9, setAnswer9] = useState('');
  const [answer10, setAnswer10] = useState('');

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 50}}>

      <FontAwesome6 name="trophy" size={25} color="black"/>
      <Text>BOXING KNOWLEDGE QUIZ</Text>
      <Text>Identify the boxer in each picture!</Text>

      <Text>EASY QUESTIONS</Text>

      <Question
        number={1}
        image={require('./img/tyson.jpg')}
        option1="Tyson Fury"
        option2="Mike Tyson"
        option3="Anthony Joshua"
        option4="George Foreman"
        answer={answer1}
        onValueChange={(value) => setAnswer1(value)}
      />

      <Question
        number={2}
        image={require('./img/ali.jpg')}
        option1="Joe Frazier"
        option2="Sugar Ray Leonard"
        option3="Muhammad Ali"
        option4="Floyd Mayweather"
        answer={answer2}
        onValueChange={(value) => setAnswer2(value)}
      />

      <Question
        number={3}
        image={require('./img/pacquiao.jpg')}
        option1="Manny Pacquiao"
        option2="Nonito Donaire"
        option3="Naoya Inoue"
        option4="Juan Manuel Marquez"
        answer={answer3}
        onValueChange={(value) => setAnswer3(value)}
      />

      <Question
        number={4}
        image={require('./img/mayweather.jpg')}
        option1="Amir Khan"
        option2="Terence Crawford"
        option3="Andre Ward"
        option4="Floyd Mayweather"
        answer={answer4}
        onValueChange={(value) => setAnswer4(value)}
      />

      <Text>MEDIUM QUESTIONS</Text>

      <Question
        number={5}
        image={require('./img/canelo.jpg')}
        option1="Gennady Golovkin"
        option2="Canelo Alvarez"
        option3="David Benavidez"
        option4="Edgar Berlanga"
        answer={answer5}
        onValueChange={(value) => setAnswer5(value)}
      />

      <Question
        number={6}
        image={require('./img/fury.jpg')}
        option1="Oleksandr Usyk"
        option2="Anthony Joshua"
        option3="Tyson Fury"
        option4="Deontay Wilder"
        answer={answer6}
        onValueChange={(value) => setAnswer6(value)}
      />

      <Question
        number={7}
        image={require('./img/joshua.jpg')}
        option1="Anthony Joshua"
        option2="Daniel Dubois"
        option3="Lennox Lewis"
        option4="Francis Ngannou"
        answer={answer7}
        onValueChange={(value) => setAnswer7(value)}
      />

      <Text>HARD QUESTIONS</Text>

      <Question
        number={8}
        image={require('./img/davis.jpg')}
        option1="Shakur Stevenson"
        option2="Devin Haney"
        option3="Ryan Garcia"
        option4="Gervonta Davis"
        answer={answer8}
        onValueChange={(value) => setAnswer8(value)}
      />

      <Question
        number={9}
        image={require('./img/usyk.jpg')}
        option1="Vasiliy Lomachenko"
        option2="Oleksandr Usyk"
        option3="Artur Beterbiev"
        option4="Dmitry Bivol"
        answer={answer9}
        onValueChange={(value) => setAnswer9(value)}
      />

      <Question
        number={10}
        image={require('./img/inoue.jpg')}
        option1="Junto Nakatani"
        option2="Kenshiro Teraji"
        option3="Naoya Inoue"
        option4="Kazuto Ioka"
        answer={answer10}
        onValueChange={(value) => setAnswer10(value)}
      />

      <Button
        title="Submit Answers"
        onPress={() => {

          let score = 0;

          if (answer1 == 'Mike Tyson') {
            score++;
          }

          if (answer2 == 'Muhammad Ali') {
            score++;
          }

          if (answer3 == 'Manny Pacquiao') {
            score++;
          }

          if (answer4 == 'Floyd Mayweather') {
            score++;
          }

          if (answer5 == 'Canelo Alvarez') {
            score++;
          }

          if (answer6 == 'Tyson Fury') {
            score++;
          }

          if (answer7 == 'Anthony Joshua') {
            score++;
          }

          if (answer8 == 'Gervonta Davis') {
            score++;
          }

          if (answer9 == 'Oleksandr Usyk') {
            score++;
          }

          if (answer10 == 'Naoya Inoue') {
            score++;
          }

          let message = '';

          if (score >= 9) {
            message = 'Excellent! You really know boxing!';
          }
          else if (score >= 7) {
            message = 'Well done! You know your boxers!';
          }
          else if (score >= 4) {
            message = 'Not bad! Keep practising!';
          }
          else {
            message = 'Keep learning about boxing!';
          }

          Alert.alert(
            'Quiz Results',
            'You got ' + score + ' out of 10 correct answers!\n' +
            'Score: ' + (score * 10) + '%\n\n' +
            message
          );

          // Reset all answers
          setAnswer1('');
          setAnswer2('');
          setAnswer3('');
          setAnswer4('');
          setAnswer5('');
          setAnswer6('');
          setAnswer7('');
          setAnswer8('');
          setAnswer9('');
          setAnswer10('');

        }}
      />

    </ScrollView>
  );
};

export default MyApp;