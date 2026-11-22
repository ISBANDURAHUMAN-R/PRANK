<p align="center">
  <img src="assets/banner.png" alt="PRANK Banner" width="100%">
</p>

# ◈ Project Prank

[![CI](https://github.com/ISBANDURAHUMAN-R/PRANK/actions/workflows/ci.yml/badge.svg)](https://github.com/ISBANDURAHUMAN-R/PRANK/actions/workflows/ci.yml)

## ◆ About the Project
Project Prank is a client-side interactive web animation and audio experiment. It combines rapid CSS keyframe glitch transformations, viewport jitter animations, and procedural sound synthesis to deliver a lighthearted visual prank experience directly inside the browser.

## ❖ Key Features
- Viewport glitch shaders and CSS keyframe camera vibration effects.
- Real-time procedural audio synthesis built with the Web Audio API without external audio files.
- Single-file zero-dependency architecture that runs entirely client-side.

## ◆ System Architecture
```mermaid
graph TD
    subgraph TriggerLayer ["&nbsp; Interaction &amp; Event Listener &nbsp;"]
        UserAction["&nbsp; User Click / &nbsp;<br/>&nbsp; Key Interaction &nbsp;"] --> EventTrigger["&nbsp; Prank State &nbsp;<br/>&nbsp; Activator &nbsp;"]
    end

    subgraph VisualEngine ["&nbsp; CSS3 Keyframe &amp; Animation FX &nbsp;"]
        EventTrigger --> GlitchClass["&nbsp; Inject Jitter &amp; &nbsp;<br/>&nbsp; Glitch CSS &nbsp;"]
        GlitchClass --> TransformMatrix["&nbsp; Viewport Transform &nbsp;<br/>&nbsp; Shifts &nbsp;"]
        GlitchClass --> ColorInvert["&nbsp; High-Frequency &nbsp;<br/>&nbsp; Color Inversion &nbsp;"]
    end

    subgraph AudioEngine ["&nbsp; Web Audio API Synthesis &nbsp;"]
        EventTrigger --> AudioCtx["&nbsp; AudioContext &nbsp;<br/>&nbsp; Initialization &nbsp;"]
        AudioCtx --> Osc["&nbsp; Oscillator Wave &nbsp;<br/>&nbsp; Generator &nbsp;"]
        AudioCtx --> Noise["&nbsp; Procedural Noise &nbsp;<br/>&nbsp; Buffer &nbsp;"]
        Osc & Noise --> GainNode["&nbsp; Gain Dynamic &nbsp;<br/>&nbsp; Modulator &nbsp;"]
        GainNode --> Speaker["&nbsp; Audio Output &nbsp;<br/>&nbsp; Destination &nbsp;"]
    end
```

## ⬢ Technologies Used
- HTML5
- CSS3 Keyframe Animations
- JavaScript (ES6)
- Web Audio API

## § Requirements
- Modern web browser

## ▲ Installation & Execution
```bash
# Open index.html directly or serve locally
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

## ※ Developer
Developer: ISBANDU RAHUMAN R  
GitHub: https://github.com/ISBANDURAHUMAN-R
