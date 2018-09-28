import React from 'react';

import { Card, Button } from 'antd';

import { log } from '../../../util/';

const { dev } = log;

let counter = 0;

export const cardList = (state = [], action) => {
  switch (action.type) {
    case 'addNewCard':
      dev({
        title: 'CardList: addNewCard',
        text: '' + JSON.stringify(action),
        textColor: 'green'
      });

      // なぜ？My webpack config still need to be improved to support Spread Operator
      return [...state, {
        setup: action.newCard.setup,
        punchline: action.newCard.punchline,
        // setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        // punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id: counter++,
      }];
    default:
      return state;
  }
};

import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

export const rootReducer = combineReducers({
  cardList
});

const store = createStore(rootReducer);

const mapStateToProps = state => ({
  cardList: state.cardList
});

const mapDispatchToProps = dispatch => ({
  // dispatch: dispatch,
  addNewCard: (newCard) => dispatch({ type: 'addNewCard', newCard }),
});

class CardsPage extends React.Component {
  render() {
    const { addNewCard, cardList } = this.props;
    return (
      <div>
        {
          cardList.map(card => (
            <Card key={ card.id }>
              <div>Q: { card.setup }</div>
              <div>
                <strong>A: { card.punchline }</strong>
              </div>
            </Card>
          ))
        }
        <div>
          <Button onClick={ () => addNewCard({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          }) }> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}


const NewCardsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsPage);


const App = () => {
  return (
    <Provider store={ store }>
      <NewCardsPage />
    </Provider>
  );
};

export default App;
