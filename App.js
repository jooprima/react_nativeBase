/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Button,
  Container,
  Text,
  Accordion,
  Badge,
  Content,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Icon,
  Right,
  Footer,
  FooterTab,
  Header,
  Title,
} from 'native-base';
import {Image, ScrollView} from 'react-native';

const dataArray = [
  {
    title: 'First Element',
    content:
      'Lorem ipsum dolor sit amet voluptatem Sed cum necessitatibus ratione.',
  },
  {
    title: 'Second Element',
    content:
      'Lorem ipsum dolor sit amet Necessitatibus suscipit perferendis modi blanditiis nesciunt eum ut. Est delectus molestias. Veniam sint eum doloremque. Recusandae corporis illum consequuntur repudiandae qui. Et animi dolorem sint odit dicta repellat.',
  },
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <ScrollView style={{marginTop:10,marginBottom:10}}>
          {/* <Button>
            <Text>Button Native Base</Text>
          </Button> */}

          <Accordion
            dataArray={dataArray}
            headerStyle={{backgroundColor: '#b7daf8'}}
            contentStyle={{backgroundColor: '#ddecf8'}}
            icon="add"
            expandedIcon="remove"
            iconStyle={{color: 'green'}}
            expandedIconStyle={{color: 'red'}}
          />

          <Badge danger>
            <Text>2345</Text>
          </Badge>

          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png',
                    }}
                  />
                  <Body>
                    <Text>Yohanes Prima</Text>
                    <Text note>@jooprima</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/3532326/pexels-photo-3532326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png',
                    }}
                  />
                  <Body>
                    <Text>Yohanes Prima</Text>
                    <Text note>@jooprima</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/3526084/pexels-photo-3526084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>

        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="apps" />
              {/* <Text>Apps</Text> */}
            </Button>
            <Button vertical>
              <Icon name="camera" />
              {/* <Text>Camera</Text> */}
            </Button>
            <Button vertical>
              <Icon name="navigate" />
              {/* <Text>Navigate</Text> */}
            </Button>
            <Button vertical>
              <Icon name="person" />
              {/* <Text>Contact</Text> */}
            </Button>
            <Button vertical style={{backgroundColor: 'blue'}}>
              <Icon name="card" />
              {/* <Text>Contact</Text> */}
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
