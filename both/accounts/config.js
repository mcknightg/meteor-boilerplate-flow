//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
var email = AccountsTemplates.removeField('email');
var pwd = AccountsTemplates.removeField('password');
var first = {_id:'firstName',type:'text',displayName:'First',required:true,placeholder:'Enter First Name'};
var last = {_id:'lastName',type:'text',displayName:'Last',required:true,placeholder:'Enter Last Name'};

AccountsTemplates.addFields([
    first,
    last,
    email,
    pwd
]);
AccountsTemplates.configure({
    confirmPassword:false
});
// Options
AccountsTemplates.configure({
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: false,
    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:false
});


AccountsTemplates.configure({
	defaultLayout: 'appLayout',
	defaultLayoutRegions: {
        header: '_header',
        footer: '_footer'
    },
    defaultContentRegion: 'area'
});
