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
    subgraph TriggerLayer ["Interaction & Event Listener"]
        UserAction[User Click / Key Interaction] --> EventTrigger[Prank State Activator]
    end

    subgraph VisualEngine ["CSS3 Keyframe & Animation FX"]
        EventTrigger --> GlitchClass[Inject Jitter & Glitch CSS Classes]
        GlitchClass --> TransformMatrix[Rapid Viewport Transform Shifts]
        GlitchClass --> ColorInvert[High-Frequency Color Inversion]
    end

    subgraph AudioEngine ["Web Audio API Synthesis"]
        EventTrigger --> AudioCtx[AudioContext Initialization]
        AudioCtx --> Osc[Oscillator Wave Generator]
        AudioCtx --> Noise[Procedural Noise Buffer]
        Osc & Noise --> GainNode[Gain Dynamic Modulator]
        GainNode --> Speaker[Audio Output Destination]
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
