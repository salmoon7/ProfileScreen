# ProfileScreen Component

## Overview

The `ProfileScreen` component is designed for managing user settings in a React Native application. It provides functionality for toggling online status, enabling dark mode, and logging out of the user session. This component enhances user experience with its intuitive design and custom font integration.

## Features

- **Toggle Online Status**: Users can easily toggle their online status.
- **Dark Mode Support**: A switch to enable or disable dark mode for better usability in different lighting conditions.
- **Logout Confirmation**: A modal prompts users to confirm their logout action to prevent accidental logouts.
- **Back Navigation**: A back button to return to the previous screen.
- **Custom Fonts**: Utilizes custom fonts to enhance visual appeal.

## Installation

To integrate this component into your React Native project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/salmoon7/ProfileScreen
   cd  https://github.com/salmoon7/ProfileScreen
   ```

2. Install dependencies:

   Make sure to install `expo` and its required dependencies:

   ```bash
   npm install
   ```

3. Add custom fonts:

   Place the custom font files (`OpenSans-Regular.ttf`, `OpenSans-Bold.ttf`, and `OpenSans-SemiBold.ttf`) in the `assets` directory of your project.

4. Run the application:

   Start your application with the following command:

   ```bash
   expo start
   ```

   Follow the instructions in the terminal to view your app in a simulator or on your mobile device.

## Usage

To use the `ProfileScreen` component, import it into your desired screen or navigation stack:

```javascript
import ProfileScreen from './path/to/ProfileScreen';

// Render the component
<ProfileScreen />
```

## Props

This component does not accept any props.

## Styling

The component includes a `styles` object defined at the bottom of the `ProfileScreen` component. You can customize the styles as per your application’s design requirements.

## Screenshots

![ProfileScreen](path/to/screenshot.png)

## Dependencies

This component relies on the following dependencies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Native](https://reactnative.dev/) - A framework for building native apps using React.
- [Expo](https://expo.dev/) - A platform for developing universal native applications for Android, iOS, and the web.
- [Ant Design Icons](https://ant.design/components/icon/) - Icons utilized in the component.
- [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/) - For loading custom fonts.



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
