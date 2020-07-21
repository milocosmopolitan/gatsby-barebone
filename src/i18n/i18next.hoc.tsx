import React, { Component, ComponentType } from 'react';
import i18next from './config';
import { I18nextProvider, withTranslation } from 'react-i18next';
// import { i18n, InitOptions } from 'i18next';

/**
 * Internationalization High Order Component
 * I18nextProvider expects an i18next instance in our config file.
 * @param WrappedComponent 
 */
function WithI18Next(WrappedComponent: ComponentType<any>) {



  // This gets us the t function and i18n instance inside layout via props.
  WrappedComponent = withTranslation()(WrappedComponent);

  return class extends Component<any> {
    render() {
      return (
        <I18nextProvider i18n={i18next}>
          <WrappedComponent {...this.props} language={i18next.language} />
        </I18nextProvider>
      );
    }
  }
}

export default WithI18Next;
