// @ts-nocheck
// TODO: remove nocheck
import type { CustomFont } from 'src/types';
// @ts-ignore
import {
  create_quill, // eslint-disable-line
  editor_css, // eslint-disable-line
  editor_js, // eslint-disable-line
  quill_bubble_css, // eslint-disable-line
  quill_snow_css, // eslint-disable-line
  quill_js, // eslint-disable-line
} from '../constants/editor';

export const getFontName = (font: string) => {
  return font.toLowerCase().replace(/\s/g, '-');
};

interface CreateHtmlArgs {
  initialHtml?: string;
  placeholder: string;
  toolbar: string;
  libraries: 'local' | 'cdn';
  theme: 'snow' | 'bubble';
  editorId: string;
  containerId: string;
  color: string;
  backgroundColor: string;
  placeholderColor: string;
  customStyles: string[];
  fonts: Array<CustomFont>;
  defaultFontFamily?: string;
  customJS?: string;
}

const Inital_Args = {
  initialHtml: '',
  placeholder: 'write here',
  toolbar: 'false',
  libraries: 'local',
  theme: 'snow',
  editorId: 'editor-container',
  containerId: 'standalone-container',
  color: 'black',
  backgroundColor: 'white',
  placeholderColor: 'rgba(0,0,0,0.6)',
  customStyles: [],
  fonts: [],
  customJS: '',
} as CreateHtmlArgs;

export const createHtml = (args: CreateHtmlArgs = Inital_Args) => {  // eslint-disable-line
  return require('../../dist/index.html');
};
