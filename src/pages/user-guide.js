import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/typography.css"

const UserGuidePage = () => {
  return (
    <Layout language={`en`}>
      <SEO title="User Guide"/>
      <div className="article">
        <h1>User Guide</h1>
        <h2>Browsing inspiration</h2>
        <p>On the Inspiration, color palettes are grouped in categories.</p>

        <p>To browse a color palette in the Explore:</p>
        <ol>
          <li>Scroll horizontally to navigate the first 10 palettes in the category.</li>
          <li>Tap any color palette in the Explore to view palette details.</li>
          <li>Tap "heart" icon to save it to your Palettes.</li>
        </ol>

        <p>To view all palette in a category, tap "view all" button on the right top corner of the group.</p>

        <h2>Creating a color palette</h2>
        <p>There are three ways to create a color palette in Color Capture:</p>
        <ol>
          <li>Capturing a palette through the camera,</li>
          <li>Capturing a palette from a photo, and</li>
          <li>Capturing a palette by editing an existing one.</li>
        </ol>

        <h2>Capturing a palette through the camera</h2>
        <p>To capture a color palette through the camera at a real-time: tap the plus button and choose the
          "Camera."</p>

        <p>The app automatically starts picking colors through your camera randomly for your inspiration.</p>

        <p>You can press the check button to save the one you like.</p>

        <p>Alternatively, you can touch the screen to freeze the five color pickers. Then manually move them around.</p>

        <p>In the freeze mode, you can lock a color picker which has a selected color you want to keep by merely tapping
          the
          color picker. The locked color picker will be held as is when you touch the dice button to choose colors on
          the screen
          randomly.</p>

        <p>Also, you can lock multiple color pickers.</p>

        <h2>Capturing a palette from a photo</h2>
        <p>To capture a palette from a photo:</p>
        <ol>
          <li>Tap the plus button and choose the "Album."</li>
          <li>Pick a photo in your album.</li>
        </ol>

        <p>You can manually move the five color pickers around on the photo.</p>

        <p>Moreover, you can tap the dice button to pick 5 colors from the photo randomly. It works the same way as when
          you
          capture a palette through the camera.</p>

        <h2>Capturing a palette by editing an existing one</h2>
        <p>To edit a palette, you can:</p>
        <ol>
          <li>Tap the edit button on the Palettes view, or</li>
          <li>Tap the edit button when previewing a palette.</li>
        </ol>

        <p>When editing the color, you can either manually adjust the hue, saturation, and brightness in the HSB mode,
          or find an
          inspiration randomly by tapping the random button.</p>

        <p>The lock and random buttons work the same way as when you capture a palette through the camera or from a
          photo.</p>

        <h2>Search color palettes</h2>
        <p>To search color palettes, you can tap the search button at the top right corner of the app.</p>

        <p>You can choose a search recommendation on the search view. Moreover, entering a keyword presents you a list
          of
          matching color palettes.</p>

        <p>At the moment, the keyword search feature supports searching palettes based on:</p>
        <ol>
          <li>a color HEX code, or</li>
          <li>a title.</li>
        </ol>

        <h2>Giving feedback</h2>
        <p>To give us feedback, tap the menu button at the top left corner of the app.</p>
        <p>Then tap "Send Feedback" button to draft the comments and send through Apple mail.</p>
      </div>
    </Layout>
  )
}

export default UserGuidePage
