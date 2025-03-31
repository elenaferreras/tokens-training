import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import ThemesLoader from 'sd-themes-loader';
 
 register(StyleDictionary, {
     withSDBuiltins: false,
 });
 
 const loader = ThemesLoader(StyleDictionary);
 
 async function run() {
  console.log('hola')
     const themes = await loader.load('/tokens');
 
     const globalTheme = themes.getThemeByName('global');

     const lightTheme = themes.getThemeByName('light');
 
     const config = {
         platforms: {
             web: {
                 files: [
                     {
                         destination: 'app/build/global/variables.css',
                         format: 'css/variables',
                     }
                 ],

                transforms: [
                    'name/kebab',
                    'ts/resolveMath',
                    'ts/typography/fontWeight',
                    'ts/size/lineHeight',
                    'size/pxToRem'
                ]
        
             }
         }
     };

     const lightConfig = {
        platforms: {
            web: {
                files: [
                    {
                        destination: 'app/build/light/variables.css',
                        format: 'css/variables',
                    }
                ],

               transforms: [
                   'name/kebab',
                   'color/rgb',
                   'attribute/color',
               ]
       
            }
        }
    };
     //app/build/light/variables.css
 
     globalTheme.addConfig(config).build();
     lightTheme.addConfig(lightConfig).build();
 
 }
 
 run();