import sass from 'node-sass';

console.log(sass.renderSync({ data: Assets.getText('test.scss')}));