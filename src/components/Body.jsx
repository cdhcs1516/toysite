import React from 'react';
import * as S from './Body.styled';

export default function Body() {
  return (
    <S.BodyContainer>
      <form id='myPageForm'>
        <h2>Clickwrap associated to snapshot location</h2>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input type='email' className='form-control' id='exampleInputEmail1' />
        </div>

        {/* <!-- Note the div container here! --> */}
        <div id='test_location_associated_group'></div>

        {/* <S.HorizontalLine />

        <h2>Clickwrap associated to snapshot config</h2>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail2'>Email address</label>
          <input type='email' className='form-control' id='exampleInputEmail2' />
        </div>

        <div id='test_config_associated_group'></div>

        <S.HorizontalLine />

        <h2>Clickwrap neither associated to snapshot config nor to snapshot location</h2>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail3'>Email address</label>
          <input type='email' className='form-control' id='exampleInputEmail3' />
        </div>

        <div id='test_no_associated_group'></div> */}

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </S.BodyContainer>
  );
}
