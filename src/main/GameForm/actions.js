import * as Types from './actionTypes';

export const doSubmit = (values) => ({
  type: Types.DO_SUBMIT_FORM,
  values,
});
