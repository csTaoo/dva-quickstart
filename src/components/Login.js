import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {testValue : 's'};
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.props);
        this.state.testValue = values.userName;
        this.props.dispatch({type:'app/login',payload:values});
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={divStyle}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <div>{this.state.testValue}</div>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
      </div>
    );
  }

}
const divStyle = {
  height : '300px',
  width : '500px',
  margin : '0 auto',
  padding : '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'


};
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect(({ app = {testValue : 'init'} }) => ({ app }))(WrappedNormalLoginForm);
