import React from 'react';
import Button from '../../components/Button';

import './style';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

const DivButtons = ({ escolherPedra, escolherPapel, escolherTesoura }) => {
  return (
    <div className="divButtons">
      <Button className="divButtons" onClick={() => escolherPedra()}>
        Pedra
      </Button>
      <Button className="divButtons" onClick={() => escolherPapel()}>
        Papel
      </Button>
      <Button className="divButtons" onClick={() => escolherTesoura()}>
        Tesoura
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(DivButtons);
