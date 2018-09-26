import React, { Component } from "react";
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, DatePicker } from "native-base";
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Image</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Image
                style={{width:300, height:100}}
                source={{uri: 'http://onlinetutorial.co.in/wp-content/uploads/2018/06/image-1.png'}}
              />
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>My Footer</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}