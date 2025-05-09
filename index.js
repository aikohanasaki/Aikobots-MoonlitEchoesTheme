/**
 * Moonlit Echoes Theme for SillyTavern
 * 月下回聲主題擴充
 * A beautiful theme with extensive customization options
 * 一個具有豐富自定義選項的精美主題
 */

// 全局設定與常量 (Global settings and constants)
const EXTENSION_NAME = 'Moonlit Echoes Theme 月下回聲';
const settingsKey = 'SillyTavernMoonlitEchoesTheme';
const extensionName = "SillyTavern-MoonlitEchoesTheme";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;
const THEME_VERSION = "2.6.2";

import { t } from '../../../i18n.js';

/**
 * 主題設定配置
 * Theme settings configuration
 *
 * 此配置定義了所有可自定義的設定項
 * This configuration defines all customizable settings
 *
 * 支持的輸入類型 (Supported input types):
 * - color: 顏色選擇器 (Color picker)
 * - slider: 滑桿 (Slider)
 * - select: 下拉選單 (Dropdown menu)
 * - text: 文字輸入框 (Text input)
 * - checkbox: 勾選框 (Checkbox)
 *
 * 每個設定項需包含 (Each setting must include):
 * - type: 輸入類型 (Input type)
 * - varId: CSS變數ID (CSS variable ID, will be used as --varId in CSS)
 * - displayText: 顯示文本 (Display text)
 * - default: 默認值 (Default value)
 * - category: 設定類別，用於分組顯示 (Setting category for grouping)
 * - description: 可選的設定說明 (Optional setting description)
 *
 * 特定類型的額外屬性 (Additional properties for specific types):
 * - slider: min, max, step
 * - select: options (包含 label 和 value 的對象數組 - array of objects with label and value)
 */
const themeCustomSettings = [
    // 主題顏色設定 (Theme color settings)
    {
        "type": "color",
        "varId": "customThemeColor",
        "displayText": t`Primary Theme Color`,
        "default": "rgba(81, 160, 222, 1)",
        "category": "colors",
        "description": t`The main interface theme color, used for highlights and accents`
    },
    {
        "type": "color",
        "varId": "customThemeColor2",
        "displayText": t`Secondary Theme Color`,
        "default": "rgba(250, 198, 121, 1)",
        "category": "colors",
        "description": t`A complementary secondary color, used for special highlights`
    },
    {
        "type": "color",
        "varId": "customBgColor1",
        "displayText": t`Main Background Color`,
        "default": "rgba(255, 255, 255, 0.1)",
        "category": "colors",
        "description": t`The primary background color used across various menus and buttons`
    },
    {
        "type": "color",
        "varId": "customBgColor2",
        "displayText": t`Secondary Background Color`,
        "default": "rgba(255, 255, 255, 0.05)",
        "category": "colors",
        "description": t`The secondary background color used across various menus and buttons`
    },
    {
        "type": "color",
        "varId": "customTopBarColor",
        "displayText": t`Top Menu Color`,
        "default": "rgba(23, 23, 23, 0.7)",
        "category": "colors",
        "description": t`Background color of the top menu (#top-bar)`
    },
    {
        "type": "color",
        "varId": "Drawer-iconColor",
        "displayText": t`Menu Icon Color`,
        "default": "rgba(255, 255, 255, 0.8)",
        "category": "colors",
        "description": t`Color of icons in the top menu, sidebar, and dropdown menus`
    },
    {
        "type": "color",
        "varId": "sheldBackgroundColor",
        "displayText": t`Chat Field Background Color`,
        "default": "rgba(0, 0, 0, 0.2)",
        "category": "colors",
        "description": t`Background color of the chat field (#sheld)`
    },
    {
        "type": "color",
        "varId": "customScrollbarColor",
        "displayText": t`Scrollbar Color`,
        "default": "rgba(255, 255, 255, 0.5)",
        "category": "colors",
        "description": t`The scrollbar color on SillyTavern`
    },

    // 背景和模糊設定 (Background and blur settings)
    {
        "type": "slider",
        "varId": "customCSS-bg-blur",
        "displayText": t`Background Blur Intensity`,
        "default": "3",
        "min": 0,
        "max": 10,
        "step": 1,
        "category": "background",
        "description": t`Adjusts the blur level of the background image`
    },
    {
        "type": "slider",
        "varId": "sheldBlurStrength",
        "displayText": t`Chat Field Background Blur Intensity`,
        "default": "5",
        "min": 0,
        "max": 10,
        "step": 1,
        "category": "background",
        "description": t`Blur level of the chat field background (#sheld)`
    },
    {
        "type": "slider",
        "varId": "customCSS-bg-opacity",
        "displayText": t`Background Image Opacity`,
        "default": "1",
        "min": 0,
        "max": 1,
        "step": 0.05,
        "category": "background",
        "description": t`Adjusts the opacity level of the background image`
    },

    // 聊天介面設定 (Chat interface settings)
    {
        "type": "select",
        "varId": "customCSS-ChatGradientBlur",
        "displayText": t`Chat Field Gradient Blur`,
        "default": "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 1) 98%, rgba(0, 0, 0, 0) 100%)",
        "options": [
            {
                "label": t`Enable`,
                "value": "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 1) 98%, rgba(0, 0, 0, 0) 100%)"
            },
            {
                "label": t`Disabled`,
                "value": "none"
            }
        ],
        "category": "chat",
        "description": t`Applies a transparent gradient effect to the top and bottom of the chat field (#chat)`
    },
    {
        "type": "text",
        "varId": "custom-ChatAvatar",
        "displayText": t`Chat Field Avatar Size`,
        "default": "40px",
        "category": "chat",
        "description": t`Width and height of character avatars in the chat field`
    },
    {
        "type": "text",
        "varId": "mesParagraphSpacing",
        "displayText": t`Message Paragraph Spacing`,
        "default": "0.5em",
        "category": "chat",
        "description": t`Sets the spacing between paragraphs in chat messages (e.g. 0.5em, 1em)`
    },
    {
        "type": "text",
        "varId": "customlastInContext",
        "displayText": t`Maximum Context Marker Style`,
        "default": "4px solid var(--customThemeColor)",
        "category": "chat",
        "description": t`Line style for the maximum context marker`
    },
    {
        "type": "select",
        "varId": "mobileQRsBarHeight",
        "displayText": t`Mobile QRs Bar Height`,
        "default": "2",
        "options": [
            {
                "label": t`Compact (1 row)`,
                "value": "1"
            },
            {
                "label": t`Default (2 rows)`,
                "value": "2"
            },
            {
                "label": t`Extended (3 rows)`,
                "value": "3"
            }
        ],
        "category": "chat",
        "description": t`Sets the maximum number of visible rows in the QRs bar on mobile devices (supports scrolling)`
    },
    {
        "type": "text",
        "varId": "custom-EchoAvatarWidth",
        "displayText": t`[Echo] Message Background Avatar Width`,
        "default": "25%",
        "category": "chat",
        "description": t`Width of character avatars in the message background for the Echo style`
    },
    {
        "type": "text",
        "varId": "custom-EchoAvatarHeight",
        "displayText": t`[Echo] Message Background Avatar Height`,
        "default": "300px",
        "category": "chat",
        "description": t`Height of character avatars in the message background for the Echo style`
    },
    {
        "type": "text",
        "varId": "custom-EchoAvatarMobileWidth",
        "displayText": t`[Echo] Mobile Message Background Avatar Width`,
        "default": "25%",
        "category": "chat",
        "description": t`Width of character avatars in the message background for the Echo style on mobile devices`
    },
    {
        "type": "text",
        "varId": "custom-EchoAvatarMobileHeight",
        "displayText": t`[Echo] Mobile Message Background Avatar Height`,
        "default": "250px",
        "category": "chat",
        "description": t`Height of character avatars in the message background for the Echo style on mobile devices`
    },
    {
        "type": "text",
        "varId": "customWhisperAvatarWidth",
        "displayText": t`[Whisper] Message Background Avatar Width`,
        "default": "50%",
        "category": "chat",
        "description": t`Width of character avatars in the message background for the Whisper style`
    },
    {
        "type": "select",
        "varId": "customWhisperAvatarAlign",
        "displayText": t`[Whisper] Avatar Alignment`,
        "default": "center",
        "options": [
            {
                "label": t`Top Aligned`,
                "value": "top"
            },
            {
                "label": t`Center Aligned`,
                "value": "center"
            },
            {
                "label": t`Bottom Aligned`,
                "value": "bottom"
            }
        ],
        "category": "chat",
        "description": t`Vertical alignment of character avatars in the message background for the Whisper style`
    },
    {
        "type": "text",
        "varId": "customRippleAvatarWidth",
        "displayText": t`[Ripple] Message Avatar Width`,
        "default": "180px",
        "category": "chat",
        "description": t`Width of character avatars in the message for the Ripple style`
    },
    {
        "type": "text",
        "varId": "customRippleAvatarMobileWidth",
        "displayText": t`[Ripple] Mobile Message Avatar Width`,
        "default": "100px",
        "category": "chat",
        "description": t`Width of character avatars in the message for the mobile Ripple style`
    },
    {
        "type": "text",
        "varId": "messageDetailsAnimationDuration",
        "displayText": t`[Advanced] Message Details Animation Duration`,
        "default": "0.8s",
        "category": "chat",
        "description": t`Controls the animation speed for message details appearing/disappearing (e.g. 0.5s, 1.2s)`
    },

    // 視覺小說模式設定 (Visual novel mode settings)
    {
        "type": "select",
        "varId": "VN-sheld-height",
        "displayText": t`Visual Novel Mode Chat Field Height`,
        "default": "40dvh",
        "options": [
            {
                "label": "40dvh",
                "value": "40dvh"
            },
            {
                "label": "50dvh",
                "value": "50dvh"
            },
            {
                "label": "60dvh",
                "value": "60dvh"
            }
        ],
        "category": "visualNovel",
        "description": t`Maximum height of the chat field (#sheld) in Visual Novel mode`
    },
    {
        "type": "select",
        "varId": "VN-expression-holder",
        "displayText": t`Visual Novel Mode Character Portrait Gradient Transparency`,
        "default": "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
        "options": [
            {
                "label": t`Enabled`,
                "value": "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)"
            },
            {
                "label": t`Disabled`,
                "value": "none"
            }
        ],
        "category": "visualNovel",
        "description": t`Bottom transparency effect for character portraits in Visual Novel mode`
    },

    // 進階設定 (Advanced settings)
    {
        "type": "checkbox",
        "varId": "enableMobile-send_form",
        "displayText": t`Enable New Mobile Input Field`,
        "default": true,
        "category": "features",
        "description": t`A message input field designed for mobile, providing a wider input box`,
        "cssBlock":  `
            /* Mobile Input Field 手機端輸入欄位 */
            @media screen and (max-width: 1000px) {
                /* Mobile Chat Input Overall 聊天輸入欄位整體 */
                #send_form {
                    margin-bottom: 0 !important;
                    min-height: 100% !important;
                    padding: 5px 18px;
                    padding-top: 8px;
                    border-radius: 15px 15px 0 0 !important;
                    transition: all 0.5s ease;
                    border: 1px solid var(--SmartThemeBlurTintColor)  !important;
                    border-top: 1.25px solid color-mix(in srgb, var(--SmartThemeBodyColor) 50%, transparent) !important;

                    &:focus-within {
                        border-top: 1.25px solid var(--customThemeColor) !important;
                        box-shadow: 0 0 5px var(--customThemeColor);
                    }

                    &.compact {
                        #leftSendForm,
                        #rightSendForm {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-wrap: nowrap;
                            width: unset;
                        }
                    }
                }

                /* Mobile Chat Menu 聊天輸選單 */
                #nonQRFormItems {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto auto;
                    grid-template-areas:
                    "textarea textarea"
                    "left right";
                    gap: 0;
                    padding: 0;

                    #send_textarea {
                        grid-area: textarea;
                        box-sizing: border-box;
                        width: 100%;
                        padding: 5px 6px;
                        margin-top: 3px;
                    }
                }

                /* Mobile Left & Right Chat Menu 左右側聊天選單 */
                #leftSendForm,
                #rightSendForm {
                    margin: 3px 0;
                }
                #leftSendForm {
                    grid-area: left;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start !important;
                }
                #rightSendForm {
                    grid-area: right;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end !important;
                }

                #rightSendForm > div,
                #leftSendForm > div,
                #nonQRFormItems #options_button {
                    font-size: 16px;
                }
                #nonQRFormItems #options_button {
                    margin-right: 10px;
                }

                #qr--bar > .qr--buttons {
                    padding: 0px !important;
                }
            }
    `
    },
    {
        "type": "checkbox",
        "varId": "enableMobile-hidden_scrollbar",
        "displayText": t`Enable Mobile Hidden Scrollbar`,
        "default": true,
        "category": "features",
        "description": t`Hides scrollbars for a clean mobile interface`,
        "cssBlock":  `
            /* Mobile Hidden Scrollbar 移動端隱藏捲軸 */
            @media screen and (max-width: 1000px) {
                * {
                    scrollbar-width: none !important;
                    -ms-overflow-style: none !important;
                    &::-webkit-scrollbar {
                        display: none !important;
                    }
                }

                .scrollableInner {
                    padding: 0 !important;
                }

                @media screen and (max-width: 1000px) {
                    #form_create {
                        padding-right: 0 !important;
                    }
                }
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "enableMobile-horizontal_hotswap",
        "displayText": t`Enable Horizontal HotSwap Scroll on Mobile`,
        "default": false,
        "category": "features",
        "description": t`Allows horizontal scrolling for the quick character selection menu (#HotSwapWrapper) on mobile`,
        "cssBlock":  `
            @media screen and (max-width: 1000px) {
                body.big-avatars #HotSwapWrapper .hotswap.avatars_inline {
                    max-height: unset;
                }
                #HotSwapWrapper:hover .hotswap.avatars_inline {
                    max-height: unset;
                    overflow: unset;
                    transition: unset;
                }
                #HotSwapWrapper:not(:hover) .hotswap.avatars_inline {
                    transition: unset;
                }
                .hotswap.avatars_inline {
                    flex-wrap: nowrap !important;
                    overflow-x: auto !important;
                    overflow-y: hidden !important;
                    padding-right: 30px !important;

                    *:focus {
                        outline: none;
                    }
                }
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "enableThemeColorization",
        "displayText": t`Apply Theme Colors to More UI Elements`,
        "default": false,
        "category": "features",
        "description": t`Applies theme colors to more parts of the UI for a more personalized look`,
        "cssBlock":  `
            .drawer-icon,
            #rightSendForm>div,
            #leftSendForm>div,
            .options-content a,
            .list-group-item,
            .mes_button {
                transition: all 0.5s ease !important;
            }
            .drawer-icon.openIcon,
            #rightSendForm>div:hover,
            #leftSendForm>div:hover,
            .options-content a:hover,
            .list-group-item:hover,
            .mes_button:hover {
                color: var(--customThemeColor) !important;
            }
            #left-nav-panel,
            #right-nav-panel,
            .drawer-content,
            #character_popup,
            #logprobsViewer,
            #floatingPrompt,
            #cfgConfig {
                border-top: 1px solid color-mix(in srgb, var(--customThemeColor) 50%, transparent) !important;
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "hideMobileEchoBackground",
        "displayText": t`Hide Mobile Echo-Style Message Background`,
        "default": false,
        "category": "features",
        "description": t`Hide the echo-style background illustration for character messages on mobile devices`,
        "cssBlock": `
            body.echostyle #chat {
                @media screen and (max-width: 1000px) {
                    .mes[is_user="true"],
                    .mes[is_user="false"] {
                        .mes_text,
                        .last_mes .mes_text {
                            padding: 10px 20px !important;
                            min-height: unset !important;
                        }
                    }
                    .mes_text::before {
                        display: none !important;
                    }
                }

                .ch_name {
                    .name_text {
                        display: inline-block !important;
                        margin-right: 5px;
                    }
                }
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "enableMessageDetails",
        "displayText": t`Hide Additional Message Details`,
        "default": false,
        "category": "features",
        "description": t`Message additional details (name, ID, time, token counter, etc.) show only on hover or click`,
        "cssBlock": `
            .mes .ch_name,
            .mes .mesIDDisplay,
            .mes .mes_timer,
            .mes .tokenCounterDisplay {
                visibility: hidden !important;
                opacity: 0 !important;
                transition: all var(--messageDetailsAnimationDuration) cubic-bezier(0.4, 0, 0.2, 1),
                            visibility 0s ease var(--messageDetailsAnimationDuration) !important;
                z-index: 10 !important;
                pointer-events: auto !important;
            }

            .mes:hover .ch_name,
            .mes:hover .mesIDDisplay,
            .mes:hover .mes_timer,
            .mes:hover .tokenCounterDisplay,
            .mes.active-message .ch_name,
            .mes.active-message .mesIDDisplay,
            .mes.active-message .mes_timer,
            .mes.active-message .tokenCounterDisplay {
                visibility: visible !important;
                opacity: 1 !important;
                transition: all var(--messageDetailsAnimationDuration) cubic-bezier(0.4, 0, 0.2, 1),
                            visibility var(--messageDetailsAnimationDuration) ease !important;
            }

            body.flatchat,
            body.bubblechat,
            body.ripplestyle {
                .mes .ch_name,
                .mes .mesIDDisplay,
                .mes .mes_timer,
                .mes .tokenCounterDisplay {
                    margin-top: -40px;
                    background: none;
                }

                .mes:hover .ch_name,
                .mes:hover .mesIDDisplay,
                .mes:hover .mes_timer,
                .mes:hover .tokenCounterDisplay,
                .mes.active-message .ch_name,
                .mes.active-message .mesIDDisplay,
                .mes.active-message .mes_timer,
                .mes.active-message .tokenCounterDisplay {
                    margin-top: unset;
                    background: unset;
                }
            }

            body.flatchat,
            body.bubblechat,
            body.documentstyle,
            body.ripplestyle {
                .mes .ch_name,
                .mes .mesIDDisplay,
                .mes .mes_timer,
                .mes .tokenCounterDisplay {
                    transform: translateY(-40px);
                }

                .mes:hover .ch_name,
                .mes:hover .mesIDDisplay,
                .mes:hover .mes_timer,
                .mes:hover .tokenCounterDisplay,
                .mes.active-message .ch_name,
                .mes.active-message .mesIDDisplay,
                .mes.active-message .mes_timer,
                .mes.active-message .tokenCounterDisplay {
                    transform: translateY(0);
                }
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "justifyParagraphText",
        "displayText": t`Justify Paragraph Text`,
        "default": false,
        "category": "features",
        "description": t`Aligns paragraph text for Chinese, Japanese, and Korean for better readability; not suitable for English layout`,
        "cssBlock": `
            p {
                text-align: justify;
                text-justify: inter-ideograph;
                }
        `
    },
    {
        "type": "checkbox",
        "varId": "increaseDesktopInputSpacing",
        "displayText": t`Increase Chat Input Field Spacing on Desktop & Tablet`,
        "default": false,
        "category": "features",
        "description": t`Add extra bottom margin to chat input fields on larger screens (tablets and desktops)`,
        "cssBlock": `
            #form_sheld {
                margin-bottom: 5px;

                @media only screen and (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (pointer: fine) {
                    margin-bottom: 22.5px;
                }
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "increaseMobileInputSpacing",
        "displayText": t`Increase Chat Input Field Spacing on Mobile`,
        "default": false,
        "category": "features",
        "description": t`Add extra bottom padding to chat input fields on mobile devices (screen width ≤ 1000px)`,
        "cssBlock": `
            @media screen and (max-width: 1000px) {
                #send_form {
                    padding-bottom: 23px;
                }
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "moveQRsBelowInputMobile",
        "displayText": t`Move QRs Bar Below Input on Mobile`,
        "default": true,
        "category": "features",
        "description": t`On mobile devices (screen width ≤ 1000px), move the QRs menu below the chat input to avoid interference from message input`,
        "cssBlock": `
            /* 手機端 QR 位置調換 */
            @media screen and (max-width: 1000px) {
                #send_form.compact {
                    flex-direction: column;
                }

                #file_form {
                    order: 1 !important;
                }
                #nonQRFormItems {
                    order: 2 !important;
                }
                #qr--bar {
                    order: 3 !important;
                }

                #leftSendForm {
                    padding-left: 6px;
                }
                #rightSendForm {
                    padding-right: 6px;
                }

                #nonQRFormItems {
                    #send_textarea {
                        padding: 2px 6px;
                        margin-top: 3px;
                    }
                }
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "fixTabletMenuLayout",
        "displayText": t`Fix Tablet Menu Layout`,
        "default": false,
        "category": "features",
        "description": t`Optimized for tablet users to prevent menu layout issues. Note: Tablet support in SillyTavern is currently limited and may not address all issues`,
        "cssBlock": `
            .drawer-content {
                top: -3px !important;
            }
            .fillLeft,
            .fillRight {
                width: 100dvw !important;
                min-width: 100dvw !important;
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "disableAllBorderRadius",
        "displayText": t`Disable All Border Radius`,
        "default": false,
        "category": "features",
        "description": t`Completely disable all border-radius and outline-radius effects throughout the UI`,
        "cssBlock": `
            *, *::before, *::after {
                border-radius: 0 !important;
                border-top-left-radius: 0 !important;
                border-top-right-radius: 0 !important;
                border-bottom-left-radius: 0 !important;
                border-bottom-right-radius: 0 !important;
                /* Handle possible outline radius */
                outline-radius: 0 !important;
                -moz-outline-radius: 0 !important;
            }
            body.whisperstyle #chat .mes::before {
                border-radius: 0 !important;
            }
            body.ripplestyle #chat .mes .mesAvatarWrapper .avatar,
            body.ripplestyle #chat .mes .mesAvatarWrapper .avatar img {
                border-radius: 0 !important;
            }
            @media screen and (max-width: 1000px) {
                #send_form {
                    border-radius: 0 !important;
                }
            }
            svg * {
                rx: 0 !important;
                ry: 0 !important;
            }
        `
    },
    {
        "type": "checkbox",
        "varId": "hideAvatarBorder",
        "displayText": t`Hide Avatar Border`,
        "default": false,
        "category": "features",
        "description": t`Hide the border around character avatars in chat messages`,
        "cssBlock": `
            #chat .mes .avatar {
                border: unset !important;
            }
        `
    }
];

/**
 * 訊息詳情顯示控制
 * Message details display controller
 * 管理訊息元素的詳情顯示狀態和互動
 * Manages the display state and interaction of message detail elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化訊息詳情顯示系統
    // Initialize message details display system
    initMessageDetailsSystem();
});

/**
 * 初始化訊息詳情顯示系統
 * Initialize the message details display system
 * 為所有訊息元素添加互動控制
 * Adds interaction controls to all message elements
 */
function initMessageDetailsSystem() {
    // 查找所有訊息元素
    // Find all message elements
    const messageElements = document.querySelectorAll('.mes');

    // 為每個訊息元素添加點擊事件
    // Add click event to each message element
    messageElements.forEach(message => {
        // 點擊切換詳情顯示狀態
        // Toggle details display state on click
        message.addEventListener('click', function(event) {
            // 檢查點擊是否發生在詳情元素內部，避免重複觸發
            // Check if click happened inside details elements to avoid retriggering
            const isClickInsideDetails = event.target.closest('.ch_name') ||
                event.target.closest('.mesIDDisplay') ||
                event.target.closest('.mes_timer') ||
                event.target.closest('.tokenCounterDisplay');

            // 如果不是點擊詳情元素本身，則切換顯示狀態
            // Toggle display state if not clicking on detail elements themselves
            if (!isClickInsideDetails) {
                this.classList.toggle('show-details');

                // 如果多個訊息同時顯示詳情會造成界面混亂，可以隱藏其他訊息的詳情
                // Optionally hide details of other messages to prevent UI clutter
                if (this.classList.contains('show-details')) {
                    messageElements.forEach(otherMessage => {
                        if (otherMessage !== this) {
                            otherMessage.classList.remove('show-details');
                        }
                    });
                }
            }
        });

        // 添加雙擊事件用於快速隱藏詳情
        // Add double-click event for quickly hiding details
        message.addEventListener('dblclick', function(event) {
            // 阻止雙擊選中文本
            // Prevent text selection on double click
            event.preventDefault();
            // 隱藏詳情
            // Hide details
            this.classList.remove('show-details');
        });
    });

    // 點擊頁面其他區域時隱藏所有詳情
    // Hide all details when clicking elsewhere on the page
    document.addEventListener('click', function(event) {
        // 檢查點擊是否發生在訊息元素外部
        // Check if click happened outside message elements
        if (!event.target.closest('.mes')) {
            // 隱藏所有訊息的詳情
            // Hide details for all messages
            messageElements.forEach(message => {
                message.classList.remove('show-details');
            });
        }
    });
}

/**
 * 修改 generateDefaultSettings 函數
 * Modify generateDefaultSettings function
 * 使用 "Moonlit Echoes - by Rivelle" 作為預設主題名稱
 * Use "Moonlit Echoes - by Rivelle" as the default theme name
 */
function generateDefaultSettings() {
    const settings = {
        enabled: true,
        presets: {
            "Moonlit Echoes - by Rivelle": {} // 官方預設配置 (Official preset)
        },
        activePreset: "Moonlit Echoes - by Rivelle"
    };

    // 為默認配置添加所有設定 (Add all settings to the default preset)
    themeCustomSettings.forEach(setting => {
        settings[setting.varId] = setting.default;
        settings.presets["Moonlit Echoes - by Rivelle"][setting.varId] = setting.default;
    });

    return Object.freeze(settings);
}

// 生成默認設定 (Generate default settings)
const defaultSettings = generateDefaultSettings();

/**
 * 擴展初始化主函數
 * Main extension initialization function
 * 在擴展載入時執行，設定配置並初始化功能
 * Executed when the extension loads, configures settings and initializes features
 */
(function initExtension() {
    console.debug(`[${EXTENSION_NAME}]`, 'Initializing extension');

    // 獲取SillyTavern上下文
    // Get SillyTavern context
    const context = SillyTavern.getContext();

    // 初始化設定
    // Initialize settings
    if (!context.extensionSettings[settingsKey]) {
        context.extensionSettings[settingsKey] = structuredClone(defaultSettings);
    }

    // 確保設定結構是最新的
    // Ensure settings structure is up-to-date
    ensureSettingsStructure(context.extensionSettings[settingsKey]);

    // 確保所有預設設定鍵存在
    // Ensure all default setting keys exist
    for (const key of Object.keys(defaultSettings)) {
        if (key !== 'presets' && key !== 'activePreset' && context.extensionSettings[settingsKey][key] === undefined) {
            context.extensionSettings[settingsKey][key] = defaultSettings[key];
        }
    }

    // 保存設定
    // Save settings
    context.saveSettingsDebounced();

    // 依照設定中的 enabled 狀態自動載入或移除CSS
    // Automatically load or remove CSS based on enabled status
    toggleCss(context.extensionSettings[settingsKey].enabled);

    // 當DOM完全載入後執行擴展的UI初始化
    // Initialize extension UI when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initExtensionUI);
    } else {
        initExtensionUI();
    }

    console.debug(`[${EXTENSION_NAME}]`, 'Extension initialized');
})();

/**
 * 確保設定結構是最新的
 * Ensure the settings structure is up-to-date
 * @param {Object} settings - 設定對象 (Settings object)
 */
function ensureSettingsStructure(settings) {
    // 確保有presets屬性 (Ensure presets property exists)
    if (!settings.presets) {
        settings.presets = {};
    }

    // 如果沒有任何預設，創建官方預設 (If no presets, create official preset)
    if (Object.keys(settings.presets).length === 0) {
        settings.presets["Moonlit Echoes - by Rivelle"] = {};

        // 從當前設定複製值到官方預設 (Copy values from current settings to official preset)
        themeCustomSettings.forEach(setting => {
            const { varId } = setting;
            if (settings[varId] !== undefined) {
                settings.presets["Moonlit Echoes - by Rivelle"][varId] = settings[varId];
            } else {
                settings.presets["Moonlit Echoes - by Rivelle"][varId] = setting.default;
            }
        });
    }

    // 確保有activePreset屬性 (Ensure activePreset property exists)
    if (!settings.activePreset || !settings.presets[settings.activePreset]) {
        // 如果沒有活動預設或活動預設不存在，使用首個可用預設 (If no active preset or it doesn't exist, use first available preset)
        const firstPreset = Object.keys(settings.presets)[0] || "Moonlit Echoes - by Rivelle";
        settings.activePreset = firstPreset;
    }

    // 處理舊的 "Moonlit Echoes" 預設 (Handle old "Moonlit Echoes" preset)
    if (settings.presets["Moonlit Echoes"]) {
        // 如果已經有 "Moonlit Echoes - by Rivelle"，不進行任何操作
        // If "Moonlit Echoes - by Rivelle" already exists, do nothing
        if (!settings.presets["Moonlit Echoes - by Rivelle"]) {
            settings.presets["Moonlit Echoes - by Rivelle"] = settings.presets["Moonlit Echoes"];
        }

        // 刪除舊預設
        // Delete old preset
        delete settings.presets["Moonlit Echoes"];

        // 如果活動預設是 "Moonlit Echoes"，更新活動預設名稱
        // If active preset is "Moonlit Echoes", update active preset name
        if (settings.activePreset === "Moonlit Echoes") {
            settings.activePreset = "Moonlit Echoes - by Rivelle";
        }
    }
}

/**
 * 初始化擴展的UI元素與事件
 * Initialize UI elements and events for the extension
 * 包括設定面板、聊天樣式和顏色選擇器
 * Includes settings panel, chat style, and color picker
 */
function initExtensionUI() {
    function loadMessageDetailsModule() {
        const scriptElement = document.createElement('script');
        scriptElement.src = `${extensionFolderPath}/message-details.js`;
        scriptElement.id = 'moonlit-message-details-script';
        document.head.appendChild(scriptElement);
    }

    // 載入 Echo 樣式頭像背景注入器
    function loadEchoAvatarInjector() {
        const scriptElement = document.createElement('script');
        scriptElement.src = `${extensionFolderPath}/echo-avatar-injector.js`;
        scriptElement.id = 'moonlit-echo-avatar-script';
        document.head.appendChild(scriptElement);
    }

    // 載入設定HTML和初始化設定面板 (Load settings HTML and initialize settings panel)
    loadSettingsHTML().then(() => {
        renderExtensionSettings();
        initChatDisplaySwitcher();
        initAvatarInjector();

        // 初始化預設管理器 (Initialize preset manager)
        initPresetManager();

        // 應用活動預設 (Apply active preset)
        applyActivePreset();

        // 添加製作者資訊 (Add creator information)
        addThemeCreatorInfo();

        // 添加現代緊湊樣式 (Add modern compact styles)
        addModernCompactStyles();

        // 添加主題版本資訊 (Add theme version information)
        addThemeVersionInfo();

        // 整合主題下拉選單 (Integrate with theme selector)
        integrateWithThemeSelector();

        // 添加主題提示 (Add theme buttons hint)
        addThemeButtonsHint();

        loadMessageDetailsModule();

        // 載入 Echo 頭像背景注入器
        loadEchoAvatarInjector();
    });

    function initMessageClickHandlers() {
        // 處理點擊事件，為每條消息添加點擊切換功能
        document.addEventListener('click', function(event) {
            // 找到被點擊的消息元素
            const messageElement = event.target.closest('.mes');

            // 如果點擊了消息元素
            if (messageElement) {
                // 檢查點擊是否發生在詳情元素內部，避免重複觸發
                const isClickInsideDetails =
                    event.target.closest('.mesIDDisplay') ||
                    event.target.closest('.mes_timer') ||
                    event.target.closest('.tokenCounterDisplay');

                // 檢查是否點擊的是訊息動作或編輯按鈕
                const isMessageActionButton =
                event.target.closest('.extraMesButtonsHint') ||
                event.target.closest('.mes_edit') ||
                event.target.closest('.mes_edit_buttons');

                // 如果是點擊鏈接、按鈕或操作按鈕，不觸發切換
                if (event.target.tagName === 'A' ||
                    event.target.tagName === 'BUTTON' ||
                    isMessageActionButton) {

                    // 如果點擊的是訊息動作或編輯按鈕，則保持詳情顯示
                    if (isMessageActionButton) {
                        messageElement.classList.add('active-message');
                    }
                    return;
                }

                // 如果不是點擊詳情元素本身，則切換顯示狀態
                if (!isClickInsideDetails) {
                    messageElement.classList.toggle('active-message');
                }
            }
            // 如果點擊的不是消息元素（即點擊了其他地方）
            else {
                // 解除所有消息的鎖定狀態
                document.querySelectorAll('.mes.active-message').forEach(function(activeMessage) {
                    activeMessage.classList.remove('active-message');
                });
            }
        });
    }

    // 在初始化時調用
    initMessageClickHandlers();
}

/**
 * 整合與主題選擇器
 * Integrate with theme selector
 * 監聽UI主題選擇器的變化，自動切換預設
 * Listen to UI theme selector changes and switch presets automatically
 */
function integrateWithThemeSelector() {
    // 獲取主題選擇器
    const themeSelector = document.getElementById('themes');
    if (!themeSelector) {
        console.warn(`[${EXTENSION_NAME}]`, 'Theme selector not found');
        return;
    }

    // 獲取主題相關按鈕
    const importButton = document.getElementById('ui_preset_import_button');
    const exportButton = document.getElementById('ui_preset_export_button');
    const deleteButton = document.getElementById('ui-preset-delete-button');
    const updateButton = document.getElementById('ui-preset-update-button');
    const saveButton = document.getElementById('ui-preset-save-button');
    const importFileInput = document.getElementById('ui_preset_import_file');

    // 監聽主題變更事件
    themeSelector.addEventListener('change', () => {
        // 獲取選擇的主題名稱
        const selectedTheme = themeSelector.value;

        // 檢查是否是我們的預設
        const context = SillyTavern.getContext();
        const settings = context.extensionSettings[settingsKey];

        // 檢查選中的主題是否存在於我們的預設中
        if (settings.presets && Object.keys(settings.presets).includes(selectedTheme)) {
            // 直接使用選擇的主題名稱作為預設名稱
            try {
                loadPreset(selectedTheme);
            } catch (error) {
                console.error(`[${EXTENSION_NAME}]`, `Error loading preset from theme selection: ${error.message}`);
            }
        }
    });

    // 檢查當前選中的主題是否是我們的預設
    function isOurPreset() {
        const context = SillyTavern.getContext();
        const settings = context.extensionSettings[settingsKey];
        return settings.presets && Object.keys(settings.presets).includes(themeSelector.value);
    }

    // 監聽匯入按鈕
    if (importButton && importFileInput) {
        importButton.addEventListener('click', () => {
            // 使用更可靠的檢查方法
            if (isOurPreset()) {
                importPreset();
            }
        });
    }

    // 監聽匯出按鈕
    if (exportButton) {
        exportButton.addEventListener('click', () => {
            // 使用更可靠的檢查方法
            if (isOurPreset()) {
                exportActivePreset();
            }
        });
    }

    // 監聽更新按鈕
    if (updateButton) {
        updateButton.addEventListener('click', () => {
            // 使用更可靠的檢查方法
            if (isOurPreset()) {
                updateCurrentPreset();
            }
        });
    }

    // 監聽保存按鈕
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            // 使用更可靠的檢查方法
            if (isOurPreset()) {
                saveAsNewPreset();
            }
        });
    }

    // 監聽刪除按鈕
    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
            // 使用更可靠的檢查方法
            if (isOurPreset()) {
                deleteCurrentPreset();
            }
        });
    }

    // 處理文件匯入
    if (importFileInput) {
        importFileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const jsonData = JSON.parse(e.target.result);

                        // 檢查是否是Moonlit Echoes格式
                        if (jsonData.moonlitEchoesPreset) {
                            // 處理Moonlit Echoes預設
                            handleMoonlitPresetImport(jsonData);
                            return; // 已處理，不繼續
                        }
                    } catch (error) {
                        console.error(`[${EXTENSION_NAME}]`, 'Error parsing import file:', error);
                    }
                };
                reader.readAsText(file);
            }
        });
    }

    addThemeButtonsHint();
}

/**
 * 添加縮圖提示
 * Add thumbnail tip
 * 在設定面板中添加縮圖設定提示
 * Add thumbnail setting tip in the settings panel
 */
function addThumbnailTip(container) {
    // 檢查是否已經添加過提示 (Check if tip already added)
    if (document.getElementById('moonlit-thumbnail-tip')) return;

    // 創建提示容器 (Create tip container)
    const tipContainer = document.createElement('div');
    tipContainer.id = 'moonlit-thumbnail-tip';
    tipContainer.classList.add('moonlit-tip-container');
    tipContainer.style.borderRadius = '5px';
    tipContainer.style.overflow = 'hidden';

    // 創建提示標題區塊 (Create tip header block)
    const tipHeader = document.createElement('div');
    tipHeader.classList.add('moonlit-tip-header');
    tipHeader.style.padding = '8px 0';
    tipHeader.style.cursor = 'pointer';
    tipHeader.style.display = 'flex';
    tipHeader.style.alignItems = 'center';

    // 添加小圖標 (Add small icon)
    const tipIcon = document.createElement('i');
    tipIcon.classList.add('fa', 'fa-info-circle');
    tipIcon.style.marginRight = '8px';
    tipIcon.style.fontSize = '0.9em';
    tipIcon.style.opacity = '0.8';

    // 添加提示標題文字 (Add tip title text)
    const tipTitle = document.createElement('small');
    tipTitle.textContent = t`Blurry or thumbnail-sized character images in chat?`;
    tipTitle.style.fontWeight = 'normal';

    // 添加微小的展開圖標 (Add small expand icon)
    const toggleIcon = document.createElement('i');
    toggleIcon.classList.add('fa', 'fa-chevron-down');
    toggleIcon.style.marginLeft = 'auto';
    toggleIcon.style.fontSize = '0.8em';
    toggleIcon.style.opacity = '0.8';
    toggleIcon.style.transition = 'transform 0.3s';

    // 組裝標題 (Assemble title)
    tipHeader.appendChild(tipIcon);
    tipHeader.appendChild(tipTitle);
    tipHeader.appendChild(toggleIcon);
    tipContainer.appendChild(tipHeader);

    // 創建提示內容 (Create tip content)
    const tipContent = document.createElement('div');
    tipContent.classList.add('moonlit-tip-content');
    tipContent.style.padding = '0';
    tipContent.style.maxHeight = '0';
    tipContent.style.overflow = 'hidden';
    tipContent.style.transition = 'all 0.3s ease';

    // 設定提示內容，更簡潔 (Set tip content, more concise)
    tipContent.innerHTML = `
        <div style="line-height: 1.5;">
            <small><span data-i18n="Please refer to the">Please refer to the</span> <a href="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme" target="_blank">Moonlit Echoes Theme GitHub README</a> <span data-i18n="and complete the necessary setup.">and complete the necessary setup.</span></small>
            </div>
        </div>
    `;

    tipContainer.appendChild(tipContent);

    // 添加點擊事件 (Add click event)
    tipHeader.addEventListener('click', () => {
        const isExpanded = tipContent.style.maxHeight !== '0px' && tipContent.style.maxHeight !== '0';

        if (isExpanded) {
            // 收起 (Collapse)
            tipContent.style.maxHeight = '0';
            tipContent.style.padding = '0';
            toggleIcon.style.transform = 'rotate(0deg)';
        } else {
            // 展開 (Expand)
            tipContent.style.maxHeight = '200px';
            tipContent.style.padding = '0';
            toggleIcon.style.transform = 'rotate(180deg)';
        }
    });

    // 添加到容器 (Add to container)
    container.appendChild(tipContainer);
}

/**
 * 添加主題提示
 * Add theme hint
 * 只在主題啟用時顯示提示
 * Only show hint when theme is enabled
 */
function addThemeButtonsHint() {
    const themesContainer = document.getElementById('UI-presets-block');
    if (!themesContainer) return;

    // 獲取設定
    // Get settings
    const context = SillyTavern.getContext();
    const settings = context.extensionSettings[settingsKey];

    // 檢查主題是否啟用
    // Check if theme is enabled
    if (!settings.enabled) {
        // 如果主題未啟用，移除任何已存在的提示
        // If theme is not enabled, remove any existing hint
        const existingHint = document.getElementById('moonlit-theme-buttons-hint');
        if (existingHint) existingHint.remove();
        return;
    }

    // 檢查提示是否已存在
    // Check if hint already exists
    if (document.getElementById('moonlit-theme-buttons-hint')) return;

    const hintElement = document.createElement('small');
    hintElement.id = 'moonlit-theme-buttons-hint';
    hintElement.style.margin = '5px 0';
    hintElement.style.padding = '5px 10px';
    hintElement.style.display = 'block';
    hintElement.style.lineHeight = '1.5';

    // 根據主題選擇器初始值顯示不同提示
    // Show different hints based on initial theme selector value
    const themeSelector = document.getElementById('themes');
    let currentTheme = themeSelector ? themeSelector.value : '';

    // 仍然保留對 "- by Rivelle" 的判斷，這樣可以識別你創建的預設
    // Still keep checking for "- by Rivelle" to identify presets created by you
    if (currentTheme.includes('- by Rivelle')) {
        // 官方 Moonlit 預設 - 保持原始寫法
        // Official Moonlit preset - keep original wording
        hintElement.innerHTML = `<i class="fa-solid fa-info-circle"></i>  <b><span data-i18n="You are currently using the third-party extension theme">You are currently using the third-party extension theme</span> Moonlit Echoes Theme <a href="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme" target="_blank">${THEME_VERSION}</a></b><br>
        <small><span data-i18n="Thank you for choosing my theme! This extension is unofficial. For issues, please contact">Thank you for choosing my theme! This extension is unofficial. For issues, please contact</span> <a href="https://github.com/RivelleDays" target="_blank">Rivelle</a></small>`;
        hintElement.style.borderLeft = '3px solid var(--customThemeColor)';
    } else {
        // 其他主題 - 保持原始寫法
        // Other themes - keep original wording
        hintElement.innerHTML = `<i class="fa-solid fa-info-circle"></i>  <b><span data-i18n="You are currently using the third-party extension theme">You are currently using the third-party extension theme</span> Moonlit Echoes Theme <a href="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme" target="_blank">${THEME_VERSION}</a></b><br>
        <small><span data-i18n="customThemeIssue">This unofficial extension may not work with all custom themes. Please troubleshoot first; if confirmed, contact</span> <a href="https://github.com/RivelleDays" target="_blank">Rivelle</a></small>`;
        hintElement.style.borderLeft = '3px solid var(--SmartThemeBodyColor)';
    }

    themesContainer.appendChild(hintElement);

    if (themeSelector) {
        themeSelector.addEventListener('change', () => {
            // 只有在主題啟用時才更新提示
            // Only update hint when theme is enabled
            if (settings.enabled) {
                const currentTheme = themeSelector.value;
                if (currentTheme.includes('- by Rivelle')) {
                    // 官方 Moonlit 預設
                    // Official Moonlit preset
                    hintElement.innerHTML = `<i class="fa-solid fa-info-circle"></i>  <b><span data-i18n="You are currently using the third-party extension theme">You are currently using the third-party extension theme</span> Moonlit Echoes Theme <a href="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme" target="_blank">${THEME_VERSION}</a></b><br>
                    <small><span data-i18n="Thank you for choosing my theme! This extension is unofficial. For issues, please contact">Thank you for choosing my theme! This extension is unofficial. For issues, please contact</span> <a href="https://github.com/RivelleDays" target="_blank">Rivelle</a></small>`;
                    hintElement.style.borderLeft = '3px solid var(--customThemeColor)';
                } else {
                    // 其他主題
                    // Other themes
                    hintElement.innerHTML = `<i class="fa-solid fa-info-circle"></i>  <b><span data-i18n="You are currently using the third-party extension theme">You are currently using the third-party extension theme</span> Moonlit Echoes Theme <a href="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme" target="_blank">${THEME_VERSION}</a></b><br>
                    <small><span data-i18n="customThemeIssue">This unofficial extension may not work with all custom themes. Please troubleshoot first; if confirmed, contact</span> <a href="https://github.com/RivelleDays" target="_blank">Rivelle</a></small>`;
                    hintElement.style.borderLeft = '3px solid var(--SmartThemeBodyColor)';
                }
            }
        });
    }
}

/**
* 處理Moonlit Echoes預設匯入
* Handle Moonlit Echoes preset import
* @param {Object} jsonData - 匯入的JSON數據 (Imported JSON data)
*/
function handleMoonlitPresetImport(jsonData) {
    if (!jsonData.moonlitEchoesPreset || !jsonData.presetName || !jsonData.settings) {
        toastr.error('Invalid Moonlit Echoes preset format');
        return;
    }

    try {
        // 獲取SillyTavern上下文
        const context = SillyTavern.getContext();
        const settings = context.extensionSettings[settingsKey];

        // 獲取預設名稱，並處理可能的前綴
        let presetName = jsonData.presetName;

        // 如果預設名稱以 "[Moonlit] " 開頭，移除這個前綴
        if (presetName.startsWith("[Moonlit] ")) {
            presetName = presetName.substring("[Moonlit] ".length);
        }

        // 如果預設名稱為空（極罕見的情況），使用默認名稱
        if (!presetName.trim()) {
            presetName = "Imported Preset";
        }

        // 創建新預設
        settings.presets[presetName] = jsonData.settings;

        // 設為活動預設
        settings.activePreset = presetName;

        // 將預設設定應用到當前設定
        applyPresetToSettings(presetName);

        // 更新預設選擇器
        updatePresetSelector();

        // 選擇性更新主題選擇器（只有在選項已存在時）
        updateThemeSelector(presetName);

        // 保存設定
        context.saveSettingsDebounced();

        // 顯示成功訊息
        toastr.success(t`Preset "${presetName}" imported successfully`);
    } catch (error) {
        toastr.error(t`Error importing preset: ${error.message}`);
        console.error(`[${EXTENSION_NAME}]`, t`Error importing preset:`, error);
    }
}


/**
* 更新主題選擇器
* Update theme selector
* @param {string} presetName - 預設名稱 (Preset name)
*/
function updateThemeSelector(presetName) {
    const themeSelector = document.getElementById('themes');
    if (!themeSelector) return;

    // 只在選項已存在時更新主題選擇器，不添加任何新選項
    let optionExists = false;

    // 檢查選項是否已存在
    for (let i = 0; i < themeSelector.options.length; i++) {
        if (themeSelector.options[i].value === presetName) {
            optionExists = true;
            themeSelector.selectedIndex = i; // 選擇該選項
            break;
        }
    }

    // 僅在選項存在時觸發變更事件
    if (optionExists) {
        themeSelector.dispatchEvent(new Event('change'));
    }
}

/**
* 設定 UI 初始化函數 - 不再需要外部 HTML 文件
* Settings UI initialization function - no longer requires external HTML file
* @returns {Promise} 完成初始化的Promise (Promise for initialization completion)
*/
function loadSettingsHTML() {
return new Promise((resolve) => {
    console.debug(`[${EXTENSION_NAME}]`, 'Initializing settings UI');

    // 由於所有 HTML 都已整合到 JavaScript 中，不需要從外部載入
    // Since all HTML is now integrated into JavaScript, no need to load from external sources
    // 只需返回已解決的 Promise，讓後續的初始化流程可以繼續
    // Just return resolved Promise to continue the initialization flow

    // 如果需要在此處執行任何初始化操作，可以在這裡添加
    // If any initialization operations need to be performed here, can be added here

    // 立即解決 Promise (Immediately resolve Promise)
    resolve();
});
}

/**
* 依照設定中的 enabled 狀態自動載入或移除CSS
* Automatically load or remove CSS based on enabled status in settings
* @param {boolean} shouldLoad - 若為 true 則載入 CSS，false 則移除 (If true, load CSS, otherwise remove)
*/
function toggleCss(shouldLoad) {
// 抓取已存在的 <link> 元素 (Get existing <link> elements)
const existingLinkStyle = document.getElementById('MoonlitEchosTheme-style');
const existingLinkExt = document.getElementById('MoonlitEchosTheme-extension');

if (shouldLoad) {
    // 確定基礎URL路徑 (Determine base URL path)
    const baseUrl = getBaseUrl();

    // 載入主題樣式 (Load theme style)
    if (!existingLinkStyle) {
        const cssUrl = baseUrl + '/style.css';
        const linkStyle = document.createElement('link');
        linkStyle.id = 'MoonlitEchosTheme-style';
        linkStyle.rel = 'stylesheet';
        linkStyle.href = cssUrl;
        document.head.append(linkStyle);
    }

    // 載入擴展樣式 (Load extension style)
    if (!existingLinkExt) {
        const extUrl = baseUrl + '/extension.css';
        const linkExt = document.createElement('link');
        linkExt.id = 'MoonlitEchosTheme-extension';
        linkExt.rel = 'stylesheet';
        linkExt.href = extUrl;
        document.head.append(linkExt);
    }

    // 確保提示可見 (Ensure hint is visible)
    addThemeButtonsHint();
} else {
    // 移除CSS (Remove CSS)
    if (existingLinkStyle) existingLinkStyle.remove();
    if (existingLinkExt) existingLinkExt.remove();

    // 移除提示 (Remove hint)
    const existingHint = document.getElementById('moonlit-theme-buttons-hint');
    if (existingHint) existingHint.remove();
}
}

/**
* 獲取擴展的基礎URL路徑
* Get the base URL path for the extension
* @returns {string} 擴展的基礎URL (Base URL for the extension)
*/
function getBaseUrl() {
let baseUrl = '';

// 嘗試各種可能的路徑獲取方法 (Try various possible path retrieval methods)
if (typeof import.meta !== 'undefined' && import.meta.url) {
    baseUrl = new URL('.', import.meta.url).href;
} else {
    const currentScript = document.currentScript;
    if (currentScript && currentScript.src) {
        baseUrl = currentScript.src.substring(0, currentScript.src.lastIndexOf('/'));
    } else {
        // 如果上述方法都失敗，使用硬編碼路徑 (If above methods fail, use hardcoded path)
        baseUrl = `${window.location.origin}/scripts/extensions/third-party/${extensionName}`;
    }
}

return baseUrl;
}

/**
* 渲染擴展設定面板
* Render extension settings panel
* 創建UI元素並設定事件處理
* Create UI elements and set up event handling
*/
function renderExtensionSettings() {
const context = SillyTavern.getContext();
const settingsContainer = document.getElementById(`${settingsKey}-container`) ?? document.getElementById('extensions_settings2');
if (!settingsContainer) {
    return;
}

// 尋找現有的設定抽屜，避免重複創建 (Find existing settings drawer to avoid duplication)
let existingDrawer = settingsContainer.querySelector(`#${settingsKey}-drawer`);
if (existingDrawer) {
    return; // 已存在則不重複創建 (Don't recreate if exists)
}

// 創建設定抽屜 (Create settings drawer)
const inlineDrawer = document.createElement('div');
inlineDrawer.id = `${settingsKey}-drawer`;
inlineDrawer.classList.add('inline-drawer');
settingsContainer.append(inlineDrawer);

// 創建抽屜標題 (Create drawer title)
const inlineDrawerToggle = document.createElement('div');
inlineDrawerToggle.classList.add('inline-drawer-toggle', 'inline-drawer-header');

const extensionNameElement = document.createElement('b');
extensionNameElement.textContent = EXTENSION_NAME;

const inlineDrawerIcon = document.createElement('div');
inlineDrawerIcon.classList.add('inline-drawer-icon', 'fa-solid', 'fa-circle-chevron-down', 'down');

inlineDrawerToggle.append(extensionNameElement, inlineDrawerIcon);

// 創建設定內容區域 (Create settings content area)
const inlineDrawerContent = document.createElement('div');
inlineDrawerContent.classList.add('inline-drawer-content');

// 添加到抽屜 (Add to drawer)
inlineDrawer.append(inlineDrawerToggle, inlineDrawerContent);

// 獲取設定 (Get settings)
const settings = context.extensionSettings[settingsKey];

// 添加製作者 (Add creator)
addThemeCreatorInfo(inlineDrawerContent);

// 創建啟用開關 (Create enable switch)
const enabledCheckboxLabel = document.createElement('label');
enabledCheckboxLabel.classList.add('checkbox_label');
enabledCheckboxLabel.htmlFor = `${settingsKey}-enabled`;

const enabledCheckbox = document.createElement('input');
enabledCheckbox.id = `${settingsKey}-enabled`;
enabledCheckbox.type = 'checkbox';
enabledCheckbox.checked = settings.enabled;

enabledCheckbox.addEventListener('change', () => {
    settings.enabled = enabledCheckbox.checked;
    toggleCss(settings.enabled);

    // 當啟用狀態改變時更新提示顯示 (Update hint display when enable status changes)
    addThemeButtonsHint();

    context.saveSettingsDebounced();
});

const enabledCheckboxText = document.createElement('span');
enabledCheckboxText.textContent = t`Enable Moonlit Echoes Theme`;

enabledCheckboxLabel.append(enabledCheckbox, enabledCheckboxText);
inlineDrawerContent.append(enabledCheckboxLabel);

// 添加空格分隔，增加視覺空間 (Add spacer for visual spacing)
const spacer = document.createElement('div');
spacer.style.height = '15px'; // 調整高度值以獲得所需的間距 (Adjust height for desired spacing)
inlineDrawerContent.append(spacer);

// 創建預設管理器 (Create preset manager)
createPresetManagerUI(inlineDrawerContent, settings);

// 添加縮圖提示 (Add thumbnail tip)
addThumbnailTip(inlineDrawerContent);

// 添加空格分隔，增加視覺空間 (Add spacer for visual spacing)
const spacer2 = document.createElement('div');
spacer2.style.height = '15px';
inlineDrawerContent.append(spacer2);

// 創建所有自定義設定項 (Create all custom settings)
createCustomSettingsUI(inlineDrawerContent, settings);

// 添加版本資訊 (Add version information)
addThemeVersionInfo(inlineDrawerContent);

// 初始化抽屜切換功能 (Initialize drawer toggle functionality)
inlineDrawerToggle.addEventListener('click', function() {
    this.classList.toggle('open');
    inlineDrawerIcon.classList.toggle('down');
    inlineDrawerIcon.classList.toggle('up');
    inlineDrawerContent.classList.toggle('open');
});
}

/**
* 創建預設管理器UI
* Create preset manager UI
* @param {HTMLElement} container - 要添加預設管理器的容器 (Container to add preset manager)
* @param {Object} settings - 當前設定值對象 (Current settings object)
*/
function createPresetManagerUI(container, settings) {
const context = SillyTavern.getContext();

// 創建預設管理器容器 (Create preset manager container)
const presetManagerContainer = document.createElement('div');
presetManagerContainer.id = 'moonlit-preset-manager';
presetManagerContainer.classList.add('moonlit-preset-manager');
presetManagerContainer.style.marginBottom = '5px';

// 創建標題 (Create title)
const presetTitle = document.createElement('h4');
presetTitle.textContent = t`Moonlit Echoes Theme Presets`;
presetTitle.style.marginBottom = '10px';
presetManagerContainer.appendChild(presetTitle);

// 創建預設選擇器行 (Create preset selector row)
const presetSelectorRow = document.createElement('div');
presetSelectorRow.style.display = 'flex';
presetSelectorRow.style.alignItems = 'center';
presetSelectorRow.style.marginBottom = '10px';
presetSelectorRow.style.gap = '8px';

// 創建預設選擇器 (Create preset selector)
const presetSelector = document.createElement('select');
presetSelector.id = 'moonlit-preset-selector';
presetSelector.classList.add('moonlit-preset-selector');
presetSelector.style.flex = '1';

// 添加所有可用預設 (Add all available presets)
const presets = settings.presets || {"Default": {}};
for (const presetName in presets) {
    const option = document.createElement('option');
    option.value = presetName;
    option.textContent = presetName;
    option.selected = settings.activePreset === presetName;
    presetSelector.appendChild(option);
}

// 預設選擇器變更事件 (Preset selector change event)
presetSelector.addEventListener('change', () => {
    loadPreset(presetSelector.value);
});

// 添加預設選擇器到行 (Add preset selector to row)
presetSelectorRow.appendChild(presetSelector);

// 創建預設操作按鈕 (Create preset operation buttons)
const importButton = document.createElement('button');
importButton.id = 'moonlit-preset-import';
importButton.classList.add('menu_button');
importButton.title = t`Import Preset`;
importButton.innerHTML = '<i class="fa-solid fa-file-import"></i>';
importButton.addEventListener('click', importPreset);
presetSelectorRow.appendChild(importButton);

const exportButton = document.createElement('button');
exportButton.id = 'moonlit-preset-export';
exportButton.classList.add('menu_button');
exportButton.title = t`Export Preset`;
exportButton.innerHTML = '<i class="fa-solid fa-file-export"></i>';
exportButton.addEventListener('click', exportActivePreset);
presetSelectorRow.appendChild(exportButton);

const saveButton = document.createElement('button');
saveButton.id = 'moonlit-preset-save';
saveButton.classList.add('menu_button');
saveButton.title = t`Update Current Preset`;
saveButton.innerHTML = '<i class="fa-solid fa-save"></i>';
saveButton.addEventListener('click', updateCurrentPreset);
presetSelectorRow.appendChild(saveButton);

const newButton = document.createElement('button');
newButton.id = 'moonlit-preset-new';
newButton.classList.add('menu_button');
newButton.title = t`Save as New Preset`;
newButton.innerHTML = '<i class="fa-solid fa-file-circle-plus"></i>';
newButton.addEventListener('click', saveAsNewPreset);
presetSelectorRow.appendChild(newButton);

const deleteButton = document.createElement('button');
deleteButton.id = 'moonlit-preset-delete';
deleteButton.classList.add('menu_button');
deleteButton.title = t`Delete Preset`;
deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
deleteButton.addEventListener('click', deleteCurrentPreset);
presetSelectorRow.appendChild(deleteButton);

// 添加行到容器 (Add row to container)
presetManagerContainer.appendChild(presetSelectorRow);

// 創建文件輸入（隱藏） (Create file input (hidden))
const fileInput = document.createElement('input');
fileInput.id = 'moonlit-preset-file-input';
fileInput.type = 'file';
fileInput.accept = '.json';
fileInput.style.display = 'none';
fileInput.addEventListener('change', handlePresetFileSelected);
presetManagerContainer.appendChild(fileInput);

// 添加預設管理器到容器 (Add preset manager to container)
container.appendChild(presetManagerContainer);
}

/**
* 初始化預設管理器
* Initialize preset manager
* 設定全局事件和處理程序
* Set global events and handlers
*/
function initPresetManager() {
// 此函數現在是空的，因為我們已經將相關邏輯移至UI創建和整合部分
// This function is now empty because we've moved the relevant logic to UI creation and integration parts
// 如果未來需要額外的初始化邏輯，可以在這裡添加
// If additional initialization logic is needed in the future, it can be added here
}

/**
* 處理預設文件選擇
* Handle preset file selection
* @param {Event} event - 文件選擇事件 (File selection event)
*/
function handlePresetFileSelected(event) {
const file = event.target.files[0];
if (!file) return;

const reader = new FileReader();
reader.onload = function(e) {
    try {
        const jsonData = JSON.parse(e.target.result);

        // 檢查文件格式 (Check file format)
        if (!jsonData.moonlitEchoesPreset || !jsonData.presetName || !jsonData.settings) {
            throw new Error(t`Invalid Moonlit Echoes theme preset file format`);
        }

        // 獲取SillyTavern上下文 (Get SillyTavern context)
        const context = SillyTavern.getContext();
        const settings = context.extensionSettings[settingsKey];

        // 獲取預設名稱 (Get preset name)
        const presetName = jsonData.presetName;

        // 創建新預設 (Create new preset)
        settings.presets[presetName] = jsonData.settings;

        // 設為活動預設 (Set as active preset)
        settings.activePreset = presetName;

        // 將預設設定應用到當前設定 (Apply preset settings to current settings)
        applyPresetToSettings(presetName);

        // 更新預設選擇器 (Update preset selector)
        updatePresetSelector();

        // 保存設定 (Save settings)
        context.saveSettingsDebounced();

        // 顯示成功訊息 (Show success message)
        toastr.success(t`Preset "${presetName}" imported successfully`);

    } catch (error) {
        toastr.error(`Error importing preset: ${error.message}`);
        console.error(`[${EXTENSION_NAME}]`, 'Error importing preset:', error);
    }

    // 重置文件輸入，允許再次選擇相同的文件 (Reset file input to allow selecting the same file again)
    event.target.value = '';
};

reader.readAsText(file);
}

/**
* 匯入預設
* Import preset
* 觸發文件選擇對話框
* Trigger file selection dialog
*/
function importPreset() {
const fileInput = document.getElementById('moonlit-preset-file-input');
if (fileInput) {
    fileInput.click();
} else {
    toastr.error(t`File input element not found`);
}
}

/**
 * 修改 exportActivePreset 函數
 * Modify exportActivePreset function
 * 使用 "[Moonlit] 預設名稱" 格式命名導出文件
 * Use "[Moonlit] preset_name" format for exported files
 */
function exportActivePreset() {
    const context = SillyTavern.getContext();
    const settings = context.extensionSettings[settingsKey];

    // 獲取活動預設
    const presetName = settings.activePreset;
    const preset = settings.presets[presetName];

    if (!preset) {
        toastr.error(t`Preset "${presetName}" not found`);
        return;
    }

    // 創建匯出JSON
    const exportData = {
        moonlitEchoesPreset: true,
        presetVersion: THEME_VERSION,
        presetName: presetName, // 不在 JSON 數據中添加前綴，只在文件名中使用
        settings: preset
    };

    // 轉換為JSON字符串
    const jsonString = JSON.stringify(exportData, null, 2);

    // 創建下載blob
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // 創建並觸發下載連結，使用前綴格式的命名方式
    const a = document.createElement('a');
    a.href = url;
    a.download = `[Moonlit] ${presetName.replace(/\s+/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // 顯示成功訊息
    toastr.success(t`Preset "${presetName}" exported successfully`);
}

/**
* 更新當前預設
* Update current preset
* 將當前設定保存到活動預設
* Save current settings to active preset
*/
function updateCurrentPreset() {
const context = SillyTavern.getContext();
const settings = context.extensionSettings[settingsKey];

// 獲取活動預設名稱 (Get active preset name)
const presetName = settings.activePreset;

// 確保不是刪除Default預設 (Ensure not deleting Default preset)
if (presetName === 'Default' && Object.keys(settings.presets).length > 1) {
    // 詢問用戶是否要更新Default預設 (Ask user if they want to update Default preset)
    if (!confirm(t`Are you sure you want to update the Default preset? This will overwrite the original settings.`)) {
        return;
    }
}

// 收集當前設定 (Collect current settings)
const currentSettings = {};
themeCustomSettings.forEach(setting => {
    const { varId } = setting;
    currentSettings[varId] = settings[varId];
});

// 更新預設 (Update preset)
settings.presets[presetName] = currentSettings;

// 保存設定 (Save settings)
context.saveSettingsDebounced();

// 顯示成功訊息 (Show success message)
toastr.success(t`Moonlit Echoes theme preset "${presetName}" updated successfully`);
}

/**
* 修改 saveAsNewPreset 函數
* Modify saveAsNewPreset function
* 統一導出格式為 "[Moonlit] 預設名稱"
* Standardize export format as "[Moonlit] preset name"
*/
function saveAsNewPreset() {
    // 引入彈出窗相關函數
    import('../../../popup.js').then(({ POPUP_TYPE, callGenericPopup }) => {
        // 使用系統對話框代替原生提示
        callGenericPopup(
            `<h3 data-i18n="Save New Moonlit Echoes Theme Preset">Save New Moonlit Echoes Theme Preset</h3>
            <p data-i18n="Please enter a name for your new Moonlit Echoes theme preset:">Please enter a name for your new Moonlit Echoes theme preset:</p>`,
            POPUP_TYPE.INPUT,
            '',
            'New preset name'
        ).then((presetName) => {
            // 檢查是否取消
            if (!presetName) return;

            // 檢查名稱是否有效
            if (!presetName.trim()) {
                toastr.error('Preset name cannot be empty');
                return;
            }

            const context = SillyTavern.getContext();
            const settings = context.extensionSettings[settingsKey];

            // 檢查是否已存在
            if (settings.presets[presetName]) {
                // 使用系統確認對話框
                import('../../../popup.js').then(({ POPUP_TYPE, callGenericPopup }) => {
                    callGenericPopup(
                        `<h3 data-i18n='Confirm Overwrite">Confirm Overwrite</h3>
                        <p data-i18n='A preset named "${presetName}" already exists. Do you want to overwrite it?'>A preset named "${presetName}" already exists. Do you want to overwrite it?</p>`,
                        POPUP_TYPE.CONFIRM
                    ).then((confirmed) => {
                        if (!confirmed) return;
                        createNewPreset(presetName);
                    });
                });
            } else {
                createNewPreset(presetName);
            }
        });
    });

    // 創建新預設的函數
    function createNewPreset(presetName) {
        const context = SillyTavern.getContext();
        const settings = context.extensionSettings[settingsKey];

        // 收集當前設定
        const currentSettings = {};
        themeCustomSettings.forEach(setting => {
            const { varId } = setting;
            currentSettings[varId] = settings[varId];
        });

        // 創建新預設
        settings.presets[presetName] = currentSettings;

        // 設為活動預設
        settings.activePreset = presetName;

        // 更新 Moonlit 預設選擇器
        updatePresetSelector();

        // 不再更新 UI Theme 選擇器，完全分離兩者

        // 同步 UI Theme 選擇器中的刪除（但不添加新預設）
        syncMoonlitPresetsWithThemeList();

        // 保存設定
        context.saveSettingsDebounced();

        // 顯示成功訊息
        toastr.success(t`Preset "${presetName}" saved successfully`);
    }
}

/**
* 刪除當前預設
* Delete current preset
*/
function deleteCurrentPreset() {
    const context = SillyTavern.getContext();
    const settings = context.extensionSettings[settingsKey];

    // 獲取活動預設名稱 (Get active preset name)
    const presetName = settings.activePreset;

    // 防止刪除最後一個預設 (Prevent deleting the last preset)
    if (Object.keys(settings.presets).length <= 1) {
        toastr.error(t`Cannot delete the only preset`);
        return;
    }

    // 確保不是刪除 Moonlit Echoes 預設 (Ensure not deleting Moonlit Echoes preset)
    if (presetName === 'Moonlit Echoes') {
        toastr.error(t`Cannot delete the Moonlit Echoes theme preset`);
        return;
    }

    // 使用動態導入彈窗模塊，明確使用 callGenericPopup
    // Use dynamic import for popup module, explicitly use callGenericPopup
    import('../../../popup.js').then((popupModule) => {
        // 檢查模塊中有哪些可用的函數 (Check which functions are available in the module)
        console.log("Available popup functions:", Object.keys(popupModule));

        // 使用正確的函數名稱 (Use correct function name)
        const { POPUP_TYPE, callGenericPopup } = popupModule;

        // 使用彈窗確認刪除 (Use popup to confirm deletion)
        callGenericPopup(
            `<h3>${t`Delete Theme Preset`}</h3><p>${t`Are you sure you want to delete the preset "${presetName}"?`}</p>`,
            POPUP_TYPE.CONFIRM
        ).then((confirmed) => {
            if (!confirmed) return;

            // 從 UI 主題選擇器中移除對應的主題 (Remove corresponding theme from UI theme selector)
            const themeSelector = document.getElementById('themes');
            if (themeSelector) {
                // 找到並移除對應的選項 (Find and remove corresponding option)
                const themeName = `${presetName} - by Rivelle`;
                for (let i = 0; i < themeSelector.options.length; i++) {
                    if (themeSelector.options[i].value === themeName) {
                        themeSelector.remove(i);
                        break;
                    }
                }
            }

            // 刪除預設 (Delete preset)
            delete settings.presets[presetName];

            // 切換到 Default 預設 (Switch to Default preset)
            settings.activePreset = 'Default';

            // 將 Default 預設設定應用到當前設定 (Apply Default preset settings to current settings)
            applyPresetToSettings('Default');

            // 更新預設選擇器 (Update preset selector)
            updatePresetSelector();

            // 更新 UI 主題列表 (Update UI theme list)
            syncMoonlitPresetsWithThemeList();

            // 保存設定 (Save settings)
            context.saveSettingsDebounced();

            // 顯示成功訊息 (Show success message)
            toastr.success(t`Preset "${presetName}" deleted successfully`);
        });
    }).catch(error => {
        console.error(`[${EXTENSION_NAME}]`, 'Error loading popup module:', error);

        // 詳細記錄錯誤信息以幫助診斷 (Log detailed error information to help diagnosis)
        console.error("Error details:", error.message, error.stack);

        // 如果動態導入失敗，回退到原始確認方式 (Fall back to original confirmation method if dynamic import fails)
        if (confirm(t`Are you sure you want to delete the preset "${presetName}"?`)) {
            // 從 UI 主題選擇器中移除對應的主題 (Remove corresponding theme from UI theme selector)
            const themeSelector = document.getElementById('themes');
            if (themeSelector) {
                // 找到並移除對應的選項 (Find and remove corresponding option)
                const themeName = `${presetName} - by Rivelle`;
                for (let i = 0; i < themeSelector.options.length; i++) {
                    if (themeSelector.options[i].value === themeName) {
                        themeSelector.remove(i);
                        break;
                    }
                }
            }

            // 執行刪除邏輯... (Execute deletion logic...)
            delete settings.presets[presetName];
            settings.activePreset = 'Default';
            applyPresetToSettings('Default');
            updatePresetSelector();
            syncMoonlitPresetsWithThemeList();
            context.saveSettingsDebounced();
            toastr.success(t`Preset "${presetName}" deleted successfully`);
        }
    });
}

/**
* 載入預設
* Load preset
* @param {string} presetName - 要載入的預設名稱 (Name of preset to load)
*/
function loadPreset(presetName) {
    const context = SillyTavern.getContext();
    const settings = context.extensionSettings[settingsKey];

    // 檢查預設是否存在
    if (!settings.presets[presetName]) {
        toastr.error(t`Preset "${presetName}" not found`);
        return;
    }

    // 設定活動預設
    settings.activePreset = presetName;

    // 應用預設設定
    applyPresetToSettings(presetName);

    // 更新 Moonlit 預設選擇器
    updatePresetSelector();

    // 選擇性更新主題選擇器（只有在選項已存在時）
    updateThemeSelector(presetName);

    // 保存設定
    context.saveSettingsDebounced();
}

/**
* 應用活動預設
* Apply active preset
* 從活動預設應用設定
* Apply settings from active preset
*/
function applyActivePreset() {
const context = SillyTavern.getContext();
const settings = context.extensionSettings[settingsKey];

// 確保有活動預設 (Ensure there is an active preset)
if (!settings.activePreset || !settings.presets[settings.activePreset]) {
    // 如果沒有活動預設或活動預設不存在，使用首個可用預設 (If no active preset or it doesn't exist, use first available preset)
    const firstPreset = Object.keys(settings.presets)[0] || "Default";
    settings.activePreset = firstPreset;
}

// 應用預設設定 (Apply preset settings)
applyPresetToSettings(settings.activePreset);
}

/**
* 將預設設定應用到當前設定
* Apply preset settings to current settings
* @param {string} presetName - 預設名稱 (Preset name)
*/
function applyPresetToSettings(presetName) {
    const context = SillyTavern.getContext();
    const settings = context.extensionSettings[settingsKey];

    // 獲取預設
    const preset = settings.presets[presetName];
    if (!preset) return;

    // 應用所有設定
    themeCustomSettings.forEach(setting => {
        const { varId, default: defaultValue } = setting;
        const value = preset[varId] !== undefined ? preset[varId] : defaultValue;
        settings[varId] = value;
        applyThemeSetting(varId, value);
    });

    // 應用所有CSS變量
    applyAllThemeSettings();

    // 更新UI
    updateSettingsUI();

    // 添加延遲處理顏色設定和選擇器
    setTimeout(() => {
        themeCustomSettings.forEach(setting => {
            const { varId, type } = setting;
            const value = settings[varId];
            if (value !== undefined) {
                if (type === 'color') {
                    updateColorPickerUI(varId, value);
                } else if (type === 'select') {
                    updateSelectUI(varId, value);
                }
            }
        });
    }, 100);  // 100毫秒延遲確保UI已更新
}

/**
* 更新設定UI
* Update settings UI
* 根據當前設定更新所有設定項的UI狀態
* Update UI state of all settings based on current settings
*/
function updateSettingsUI() {
const context = SillyTavern.getContext();
const settings = context.extensionSettings[settingsKey];

// 更新所有設定項UI (Update all setting item UIs)
themeCustomSettings.forEach(setting => {
    const { varId, type } = setting;
    const value = settings[varId];

    // 根據設定類型更新UI (Update UI based on setting type)
    switch (type) {
        case 'color':
            updateColorPickerUI(varId, value);
            break;
        case 'slider':
            updateSliderUI(varId, value);
            break;
        case 'select':
            updateSelectUI(varId, value);
            break;
        case 'text':
            updateTextInputUI(varId, value);
            break;
        case 'checkbox':
            updateCheckboxUI(varId, value);
            break;
    }
});
}

/**
* 更新顏色選擇器UI
* Update color picker UI
* @param {string} varId - 設定變數ID (Setting variable ID)
* @param {string} value - 顏色值 (Color value)
*/
function updateColorPickerUI(varId, value) {
    // 更新顏色預覽
    const colorPreview = document.querySelector(`#cts-${varId}-preview`);
    if (colorPreview) {
        colorPreview.style.background = value;
    }

    // 更新Tool Cool Color Picker
    const colorPicker = document.querySelector(`#cts-${varId}-color`);
    if (colorPicker) {
        if (typeof colorPicker.setColor === 'function') {
            colorPicker.setColor(value);
        } else {
            colorPicker.setAttribute('color', value);
        }
    }

    // 更新文本輸入欄位
    const textInput = document.querySelector(`#cts-${varId}-text`);
    if (textInput) {
        const hexValue = rgbaToHex(value);
        textInput.value = hexValue || value;
    }

    // 更新透明度滑桿和值顯示
    const alphaSlider = document.querySelector(`#cts-${varId}-alpha`);
    const alphaValue = document.querySelector(`#cts-${varId}-alpha-value`);

    if (alphaSlider && alphaValue) {
        const alpha = getAlphaFromRgba(value);
        const alphaPercent = Math.round(alpha * 100);
        alphaSlider.value = alphaPercent;
        alphaValue.textContent = alphaPercent;

        // 更新滑塊顏色 - 確保一定會執行
        const hexColor = rgbaToHex(value);
        if (hexColor) {
            // 使用延遲確保DOM已更新
            setTimeout(() => {
                updateColorSliderThumb(varId, hexColor);
            }, 10);
        }
    }
}

/**
* 更新滑桿UI
* Update slider UI
* @param {string} varId - 設定變數ID (Setting variable ID)
* @param {string|number} value - 滑桿值 (Slider value)
*/
function updateSliderUI(varId, value) {
// 更新滑桿 (Update slider)
const slider = document.querySelector(`#cts-slider-${varId}`);
if (slider) {
    slider.value = value;
}

// 更新數值輸入 (Update number input)
const numberInput = document.querySelector(`#cts-number-${varId}`);
if (numberInput) {
    numberInput.value = value;
}
}

/**
 * 更新選擇器UI
 * Update selector UI - enhanced version
 * @param {string} varId - 設定變數ID (Setting variable ID)
 * @param {string} value - 選擇值 (Selection value)
 */
function updateSelectUI(varId, value) {
    const select = document.querySelector(`#cts-${varId}`);
    if (!select) return;

    // 找到對應的設定項
    const settingConfig = themeCustomSettings.find(s => s.varId === varId);
    if (!settingConfig || !settingConfig.options) return;

    // 清空現有的選項
    select.innerHTML = '';

    // 重新創建所有選項
    settingConfig.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        optionElement.selected = value === option.value;
        select.appendChild(optionElement);
    });

    // 設置當前值
    select.value = value;
}

/**
* 更新文本輸入UI
* Update text input UI
* @param {string} varId - 設定變數ID (Setting variable ID)
* @param {string} value - 文本值 (Text value)
*/
function updateTextInputUI(varId, value) {
    const input = document.querySelector(`#cts-${varId}`);
    if (input) {
        input.value = value;
    }
}

/**
* 更新複選框UI
* Update checkbox UI
* @param {string} varId - 設定變數ID (Setting variable ID)
* @param {boolean} value - 複選框狀態 (Checkbox state)
*/
function updateCheckboxUI(varId, value) {
    const checkbox = document.querySelector(`#cts-checkbox-${varId}`);
    if (checkbox) {
        checkbox.checked = value === true;
    }
}

/**
* 更新預設選擇器
* Update preset selector
* 重新填充預設選擇器並選擇當前活動預設
* Repopulate preset selector and select current active preset
*/
function updatePresetSelector() {
const presetSelector = document.getElementById('moonlit-preset-selector');
if (!presetSelector) return;

// 獲取設定 (Get settings)
const context = SillyTavern.getContext();
const settings = context.extensionSettings[settingsKey];

// 清空選擇器 (Clear selector)
presetSelector.innerHTML = '';

// 添加所有可用預設 (Add all available presets)
for (const presetName in settings.presets) {
    const option = document.createElement('option');
    option.value = presetName;
    option.textContent = presetName;
    option.selected = settings.activePreset === presetName;
    presetSelector.appendChild(option);
}
}

/**
* 添加主題製作者資訊到設定面板
* Add theme creator information to settings panel
* @param {HTMLElement} [container] - 可選的容器，若未提供則使用默認的設定容器 (Optional container, uses default settings container if not provided)
*/
function addThemeCreatorInfo(container) {
// 檢查是否已經添加過製作者資訊 (Check if creator info already added)
if (document.getElementById('moonlit-echoes-creator')) return;

// 如果沒有傳入容器，則使用默認的設定容器 (If no container passed, use default settings container)
if (!container) {
    container = document.querySelector('.settings-container');
}

// 檢查容器是否存在 (Check if container exists)
if (!container) return;

// 創建製作者資訊容器 (Create creator info container)
const creatorContainer = document.createElement('div');
creatorContainer.classList.add('moonlit-echoes', 'flex-container', 'flexFlowColumn');
creatorContainer.style.marginTop = '5px';
creatorContainer.style.marginBottom = '15px';
creatorContainer.style.textAlign = 'center';

// 設定HTML內容 (Set HTML content)
creatorContainer.innerHTML = `
    <small id="moonlit-echoes-creator">
        <span>Created with Heartfelt Passion by</span>
        <a href="https://github.com/RivelleDays" target="_blank" rel="noopener noreferrer">Rivelle</a><br>
        <span>Dedicated to All 可愛 (Kind & Wonderful) People</span>
    </small>
`;

// 添加到設定面板容器 (Add to settings panel container)
container.appendChild(creatorContainer);
}


/**
* 添加主題版本資訊到設定面板
* Add theme version information to settings panel
* @param {HTMLElement} container - 要添加版本資訊的容器 (Container to add version info)
*/
function addThemeVersionInfo(container) {
// 檢查是否已經添加過版本資訊 (Check if version info already added)
if (document.getElementById('moonlit-echoes-version')) return;

// 檢查容器是否存在 (Check if container exists)
if (!container) return;

// 創建版本資訊容器 (Create version info container)
const versionContainer = document.createElement('div');
versionContainer.classList.add('moonlit-echoes', 'flex-container', 'flexFlowColumn');
versionContainer.style.marginTop = '5px';
versionContainer.style.marginBottom = '15px';
versionContainer.style.textAlign = 'center';

// 設定HTML內容 (Set HTML content)
versionContainer.innerHTML = `
    <small class="flex-container justifyCenter alignitemscenter">
        <span data-i18n="Moonlit Echoes Theme Version">Moonlit Echoes Theme Version</span>
        <a id="moonlit-echoes-version"
            href="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme"
            target="_blank"
            rel="noopener noreferrer"
            style="margin-left: 5px;">${THEME_VERSION}</a>
    </small>
`;

// 添加到提供的容器 (Add to provided container)
container.appendChild(versionContainer);
}

/**
* 添加現代緊湊樣式
* Add modern compact styles
* 添加更現代、更緊湊的UI樣式
* Add more modern, more compact UI styles
*/
function addModernCompactStyles() {
// 檢查是否已經添加過樣式 (Check if styles already added)
if (document.getElementById('moonlit-modern-styles')) {
    return;
}

// 創建樣式元素 (Create style element)
const styleElement = document.createElement('style');
styleElement.id = 'moonlit-modern-styles';

// 添加現代緊湊的CSS樣式 (Add modern compact CSS styles)
styleElement.textContent = `
    /* 基本設定 (Basic settings) */
    .theme-category-content {
        display: block;
        width: 100%;
        padding: 8px 0;
        overflow-y: auto;
        transition: max-height 0.3s ease-out, opacity 0.2s ease-out;
    }

    /* 單欄佈局 (Single column layout) */
    .colors-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    /* 改進設定項容器 (Improved setting item container) */
    .theme-setting-item {
        margin-bottom: 12px;
    }

    /* 改進類別標題容器 (Improved category title container) */
    .theme-category-header {
        padding: 8px 0 !important;
        margin-bottom: 5px !important;

        h4 {
            font-weight: 700;
        }
    }

    /* 改進標籤和描述 (Improved labels and descriptions) */
    .theme-setting-container label {
        display: block;
        margin-bottom: 4px;
        font-size: 0.95em;
        font-weight: 600;
    }

    .theme-setting-container small {
        display: block;
        margin-bottom: 6px;
        opacity: 0.7;
        font-size: 0.85em;
    }

    /* 改進顏色選擇器佈局 (Improved color picker layout) */
    .theme-color-picker {
        max-width: 480px;
    }

    /* 改進下拉選單 (Improved dropdown menu) */
    select.widthNatural.flex1.margin0 {
        min-width: 185.5px !important;
        max-width: 480px !important;
    }

    /* 設定項統一寬度限制 (Setting item uniform width limit) */
    .theme-setting-container {
        max-width: 480px;
    }

    /* 改進滑桿樣式 (Improved slider style) */
    input[type="range"].moonlit-neo-range-input {
        height: 6px;
        border-radius: 3px;
    }
    input[type="number"].moonlit-neo-range-input {
        width: 60px;
        height: 32.5px;
        text-align: center;
        border-radius: 5px;
        background-color: var(--black30a);
        border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);;
    }

    /* 改進顏色選擇器視覺效果 (Improved color picker visual effects) */
    .color-preview {
        box-shadow: 0 0 3px var(--black30a);
    }

    /* 改進輸入框樣式 (Improved input box style) */
    .theme-setting-container input[type="text"] {
        padding: 5px 8px;
        background-color: var(--black30a);
        border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
        border-radius: 5px;
        color: var(--SmartThemeBodyColor);
    }

    /* 預設管理器樣式 (Preset manager style) */
    .moonlit-preset-manager {
        background-color: var(--black30a);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 5px !important;
        border: 1px solid
        color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
    }

    .moonlit-preset-manager h4 {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1em;
        opacity: 0.85;
        text-align: left;
        padding: 3px;
        padding-left: 10px !important;
        border-left: 3px solid var(--customThemeColor);
    }

    .moonlit-preset-selector {
        flex: 1;
        padding: 5px 8px;
        background-color: var(--black30a);
        border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
        border-radius: 5px;
        color: var(--SmartThemeBodyColor);
        margin-bottom: 0 !important;
    }
`;

// 添加到頭部 (Add to head)
document.head.appendChild(styleElement);
}

/**
* 創建自定義設定UI
* Create custom settings UI
* 根據themeCustomSettings設定生成所有設定項的UI元素
* Generate UI elements for all settings based on themeCustomSettings
* @param {HTMLElement} container - 設定容器元素 (Settings container element)
* @param {Object} settings - 當前設定值對象 (Current settings object)
*/
function createCustomSettingsUI(container, settings) {
const context = SillyTavern.getContext();

// 獲取設定類別 (Get setting categories)
const categories = {};
themeCustomSettings.forEach(setting => {
    const category = setting.category || 'general';
    if (!categories[category]) {
        categories[category] = [];
    }
    categories[category].push(setting);
});

// 類別名稱映射 (Category name mapping)
const categoryNames = {
    'colors': t`Theme Color Settings`,
    'background': t`Background Settings`,
    'chat': t`Chat Interface`,
    'visualNovel': t`Visual Novel Mode`,
    'general': t`General Settings`,
    'features': t`Advanced Settings`
};

// 處理所有類別設定 (Process all category settings)
Object.keys(categories).forEach(category => {
    // 創建類別容器 (Create category container)
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('theme-setting-category');

    // 創建可折疊的類別標題容器 (Create collapsible category title container)
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('theme-category-header');
    titleContainer.style.cursor = 'pointer';
    titleContainer.style.display = 'flex';
    titleContainer.style.alignItems = 'center';
    titleContainer.style.marginBottom = '5px';
    titleContainer.style.padding = '5px 0';
    titleContainer.style.borderBottom = '1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent)';

    // 添加展開/收縮圖示 (Add expand/collapse icon)
    const toggleIcon = document.createElement('i');
    toggleIcon.classList.add('fa', 'fa-chevron-down');
    toggleIcon.style.marginRight = '8px';
    toggleIcon.style.transition = 'transform 0.3s';
    toggleIcon.style.transform = 'rotate(-90deg)'; // 預設收合狀態 (Default collapsed state)

    // 創建類別標題 (Create category title)
    const categoryTitle = document.createElement('h4');
    categoryTitle.textContent = categoryNames[category] || category;
    categoryTitle.style.margin = '0';

    titleContainer.appendChild(toggleIcon);
    titleContainer.appendChild(categoryTitle);
    categoryContainer.appendChild(titleContainer);

    // 創建內容容器 (Create content container)
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('theme-category-content');
    contentContainer.style.transition = 'max-height 0.3s ease-out, opacity 0.2s ease-out';
    contentContainer.style.overflow = 'hidden';
    contentContainer.style.maxHeight = '0px'; // 預設收合 (Default collapsed)
    contentContainer.style.opacity = '0';
    contentContainer.style.padding = '5px';

    // 創建該類別下的所有設定項 (Create all settings under this category)
    categories[category].forEach(setting => {
        const settingContainer = document.createElement('div');
        settingContainer.classList.add('theme-setting-item');

        createSettingItem(settingContainer, setting, settings);
        contentContainer.appendChild(settingContainer);
    });

    // 添加折疊事件 (Add collapse event)
    let isCollapsed = true; // 預設為收縮狀態

    titleContainer.addEventListener('click', () => {
        if (isCollapsed) {
            // 展開 (Expand)
            const scrollHeight = contentContainer.scrollHeight;
            contentContainer.style.maxHeight = scrollHeight + 'px';
            contentContainer.style.opacity = '1';
            toggleIcon.style.transform = 'rotate(0deg)';
        } else {
            // 收縮 (Collapse)
            contentContainer.style.maxHeight = '0px';
            contentContainer.style.opacity = '0';
            toggleIcon.style.transform = 'rotate(-90deg)';
        }

        // 切換狀態
        isCollapsed = !isCollapsed;
    });

    categoryContainer.appendChild(contentContainer);
    // 添加到主容器 (Add to main container)
    container.appendChild(categoryContainer);
});

// 添加CSS樣式以支持緊湊佈局 (Add CSS styles to support compact layout)
addModernCompactStyles();
}

/**
* 創建單個設定項
* Create single setting item
* @param {HTMLElement} container - 設定容器元素 (Setting container element)
* @param {Object} setting - 設定設定對象 (Setting configuration object)
* @param {Object} settings - 當前設定值對象 (Current settings object)
*/
function createSettingItem(container, setting, settings) {
// 創建設定項容器 (Create setting item container)
const settingContainer = document.createElement('div');
settingContainer.classList.add('theme-setting-container');

// 只有非複選框類型才創建標準標籤和描述 (Only create standard labels and descriptions for non-checkbox types)
if (setting.type !== 'checkbox') {
    // 創建設定項標籤 (Create setting item label)
    const label = document.createElement('label');
    label.textContent = setting.displayText;
    settingContainer.appendChild(label);

    // 如果有說明，添加說明文字 (If there is a description, add description text)
    if (setting.description) {
        const description = document.createElement('small');
        description.textContent = setting.description;
        settingContainer.appendChild(description);
    }
}

// 根據設定類型創建不同的UI元素 (Create different UI elements based on setting type)
switch (setting.type) {
    case 'color':
        createColorPicker(settingContainer, setting, settings);
        break;
    case 'slider':
        createSlider(settingContainer, setting, settings);
            break;
        case 'select':
            createSelect(settingContainer, setting, settings);
            break;
        case 'text':
            createTextInput(settingContainer, setting, settings);
            break;
        case 'checkbox':
            createCheckbox(settingContainer, setting, settings);
            break;
        default:
            console.warn(`[${EXTENSION_NAME}]`, `未知的設定類型: ${setting.type}`);
    }

    container.appendChild(settingContainer);
}

/**
 * 創建顏色選擇器設定項 - 改進版
 * Create color picker setting item - improved version
 * 支援HEX優先顯示與透明度數值顯示
 * Support HEX priority display and opacity value display
 * @param {HTMLElement} container - 設定容器元素 (Setting container element)
 * @param {Object} setting - 設定設定對象 (Setting configuration object)
 * @param {Object} settings - 當前設定值對象 (Current settings object)
 */
function createColorPicker(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue } = setting;
    const currentValue = settings[varId] || defaultValue;

    // 創建顏色選擇容器 (Create color picker container)
    const colorPickerContainer = document.createElement('div');
    colorPickerContainer.classList.add('theme-color-picker');
    colorPickerContainer.style.display = 'flex';
    colorPickerContainer.style.alignItems = 'center';
    colorPickerContainer.style.gap = '10px';
    colorPickerContainer.style.padding = '2px 0';
    colorPickerContainer.style.minHeight = '36px';

    // 創建顏色預覽方塊 (Create color preview box)
    const colorPreview = document.createElement('div');
    colorPreview.id = `cts-${varId}-preview`;
    colorPreview.classList.add('color-preview');
    colorPreview.style.width = '30px';
    colorPreview.style.height = '30px';
    colorPreview.style.minWidth = '30px';
    colorPreview.style.minHeight = '30px';
    colorPreview.style.borderRadius = '4px';
    colorPreview.style.border = '1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent)';
    colorPreview.style.background = currentValue;
    colorPreview.style.cursor = 'pointer';
    colorPreview.style.boxShadow = '0 1px 3px var(--SmartThemeShadowColor)';

    // 創建文本輸入 - 優先使用HEX格式 (Create text input - prioritize HEX format)
    const textInput = document.createElement('input');
    textInput.id = `cts-${varId}-text`;
    textInput.type = 'text';
    // 優先顯示HEX格式（如果可能） (Prioritize HEX format display if possible)
    const initialHexValue = rgbaToHex(currentValue);
    textInput.value = initialHexValue || currentValue;
    textInput.classList.add('color-input-text');
    textInput.style.flex = '1';
    textInput.style.minWidth = '80px';
    textInput.style.minHeight = '28px';
    textInput.style.padding = '4px 6px';
    textInput.style.backgroundColor = 'var(--black30a)';
    textInput.style.border = '1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent)';
    textInput.style.borderRadius = '4px';
    textInput.style.color = 'var(--SmartThemeBodyColor)';

    // 創建顏色選擇器 (Create color picker)
    const colorInput = document.createElement('input');
    colorInput.id = `cts-${varId}-color`;
    colorInput.type = 'color';
    colorInput.value = rgbaToHex(currentValue) || '#ffffff';
    colorInput.style.width = '1px';
    colorInput.style.height = '1px';
    colorInput.style.opacity = '0';
    colorInput.style.position = 'absolute';
    colorInput.style.pointerEvents = 'auto'; // 允許觸控事件 (Allow touch events)

    // 創建透明度控制容器 (Create opacity control container)
    const alphaContainer = document.createElement('div');
    alphaContainer.style.display = 'flex';
    alphaContainer.style.flexDirection = 'column';
    alphaContainer.style.width = '120px';
    alphaContainer.style.gap = '3px';

    // 創建透明度標籤 (Create opacity label)
    const alphaLabel = document.createElement('span');
    alphaLabel.textContent = t`Opacity`;
    alphaLabel.style.fontSize = '10px';
    alphaLabel.style.opacity = '0.7';
    alphaLabel.style.alignSelf = 'flex-start';

    // 創建透明度控制行 (Create opacity control row)
    const alphaRow = document.createElement('div');
    alphaRow.style.display = 'flex';
    alphaRow.style.alignItems = 'center';
    alphaRow.style.width = '100%';
    alphaRow.style.gap = '5px';

    // 創建透明度滑桿 (Create opacity slider)
    const alphaSlider = document.createElement('input');
    alphaSlider.id = `cts-${varId}-alpha`;
    alphaSlider.type = 'range';
    alphaSlider.min = '0';
    alphaSlider.max = '100';
    alphaSlider.step = '1';
    alphaSlider.value = Math.round(getAlphaFromRgba(currentValue) * 100);
    alphaSlider.style.flex = '1';
    alphaSlider.style.height = '5px';
    alphaSlider.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    alphaSlider.style.borderRadius = '2px';
    alphaSlider.style.appearance = 'none';
    alphaSlider.style.outline = 'none';
    alphaSlider.style.cursor = 'pointer';

    // 為滑桿添加更現代的樣式 (Add more modern style for slider)
    alphaSlider.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2))';
    alphaSlider.style.backgroundSize = '100% 3px';
    alphaSlider.style.backgroundPosition = 'center';
    alphaSlider.style.backgroundRepeat = 'no-repeat';
    alphaSlider.style.boxShadow = 'inset 0 0 2px var(--SmartThemeBodyColor, rgba(255, 255, 255, 0.3))';

    // 為滑塊添加樣式 (Add style for slider thumb)
    const thumbStyle = `
        #${alphaSlider.id}::-webkit-slider-thumb {
            appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${initialHexValue || '#ffffff'};
            border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            cursor: pointer;
        }
        #${alphaSlider.id}::-moz-range-thumb {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${initialHexValue || '#ffffff'};
            border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            cursor: pointer;
        }
    `;

    // 添加滑塊樣式到文檔 (Add thumb style to document)
    const styleElem = document.createElement('style');
    styleElem.textContent = thumbStyle;
    document.head.appendChild(styleElem);

    // 創建透明度數值顯示 (Create opacity value display)
    const alphaValue = document.createElement('span');
    alphaValue.id = `cts-${varId}-alpha-value`;
    alphaValue.textContent = alphaSlider.value + '%';
    alphaValue.style.width = '30px';
    alphaValue.style.textAlign = 'right';
    alphaValue.style.fontSize = '12px';
    alphaValue.style.opacity = '0.9';

    // 在 createColorPicker 函數內部，定義一個更可靠的觸發函數
// 這應該放在函數定義部分，其他事件監聽器之前

// 設置點擊預覽區域的多重觸發方式 (Set multiple trigger methods for clicking preview area)
function triggerColorPicker() {
    // 多重方式嘗試觸發 (Multiple attempts to trigger)
    setTimeout(() => {
        try {
            colorInput.click();

            // 如果第一次嘗試可能失敗，再嘗試一次
            setTimeout(() => {
                colorInput.click();
            }, 50);
        } catch (error) {
            console.error(`[${EXTENSION_NAME}]`, `顏色選擇器觸發失敗: ${error.message}`);
        }
    }, 10);
}

    // 點擊顏色預覽時觸發顏色選擇器 (Trigger color picker when clicking color preview)
    colorPreview.addEventListener('click', (e) => {
        // 阻止事件冒泡 (Prevent event bubbling)
        e.preventDefault();
        e.stopPropagation();

        // 使用更可靠的觸發函數
        triggerColorPicker();
    });

    // 添加觸控事件支援 (Add touch event support)
    colorPreview.addEventListener('touchstart', (e) => {
        // 阻止事件冒泡和默認行為 (Prevent event bubbling and default behavior)
        e.preventDefault();
        e.stopPropagation();
    }, { passive: false });

    colorPreview.addEventListener('touchend', (e) => {
        // 阻止事件冒泡和默認行為 (Prevent event bubbling and default behavior)
        e.preventDefault();
        e.stopPropagation();

        // 使用更可靠的觸發函數
        triggerColorPicker();
    }, { passive: false });

    // 顏色選擇器變更時更新 (Update when color picker changes)
    colorInput.addEventListener('input', () => {
        updateColor();
    });

    // 顏色選擇器完成選擇時更新 (Update when color picker selection is complete)
    colorInput.addEventListener('change', () => {
        updateColor();
    });

    // 透明度滑桿變更時更新 (Update when opacity slider changes)
    alphaSlider.addEventListener('input', () => {
        const alphaPercent = alphaSlider.value;
        alphaValue.textContent = alphaPercent + '%';
        updateColorAndAlpha();

        // 更新滑塊顏色 (Update thumb color)
        const hexColor = colorInput.value;
        updateSliderThumbColor(hexColor);
    });

    // 文本輸入變更事件 (Text input change event)
    textInput.addEventListener('change', () => {
        try {
            let color = textInput.value.trim();
            let isValid = false;
            let hexColor, alpha = getAlphaFromRgba(currentValue);

            // 檢查是否是有效的HEX格式 (Check if valid HEX format)
            if (/^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/.test(color)) {
                isValid = true;
                hexColor = color;
                // 保持現有的透明度 (Keep existing opacity)
            }
            // 檢查是否是有效的RGBA格式 (Check if valid RGBA format)
            else if (/^rgba?\([\d\s,\.]+\)$/.test(color)) {
                isValid = true;
                hexColor = rgbaToHex(color);
                alpha = getAlphaFromRgba(color);
            }

            if (isValid) {
                // 更新顏色選擇器 (Update color picker)
                if (hexColor) {
                    colorInput.value = hexColor;
                }

                // 更新透明度滑桿 (Update opacity slider)
                const alphaPercent = Math.round(alpha * 100);
                alphaSlider.value = alphaPercent;
                alphaValue.textContent = alphaPercent + '%';

                // 更新滑塊顏色 (Update thumb color)
                updateSliderThumbColor(hexColor);

                // 生成RGBA顏色 (Generate RGBA color)
                const r = parseInt(colorInput.value.slice(1, 3), 16);
                const g = parseInt(colorInput.value.slice(3, 5), 16);
                const b = parseInt(colorInput.value.slice(5, 7), 16);
                const rgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

                // 更新顏色預覽 (Update color preview)
                colorPreview.style.background = rgbaColor;

                // 更新設定並應用 (Update and apply settings)
                settings[varId] = rgbaColor;
                applyThemeSetting(varId, rgbaColor);
                context.saveSettingsDebounced();
            } else {
                // 恢復為之前的值 (Restore to previous value)
                const previousHex = rgbaToHex(settings[varId]);
                textInput.value = previousHex || settings[varId] || defaultValue;
            }
        } catch (error) {
            console.error(`[${EXTENSION_NAME}]`, `Error parsing color: ${error.message}`);
            // 恢復為之前的值 (Restore to previous value)
            const previousHex = rgbaToHex(settings[varId]);
            textInput.value = previousHex || settings[varId] || defaultValue;
        }
    });

    // 更新滑塊顏色 (Update slider thumb color)
    function updateSliderThumbColor(hexColor) {
        // 生成新的滑塊樣式 (Generate new thumb style)
        const newThumbStyle = `
            #${alphaSlider.id}::-webkit-slider-thumb {
                appearance: none;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: ${hexColor};
                border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                cursor: pointer;
            }
            #${alphaSlider.id}::-moz-range-thumb {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: ${hexColor};
                border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                cursor: pointer;
            }
        `;

        // 更新樣式 (Update style)
        styleElem.textContent = newThumbStyle;
    }

    // 更新顏色的函數 (Function to update color)
    function updateColor() {
        const hexColor = colorInput.value;
        const alpha = alphaSlider.value / 100;

        // 從HEX色碼獲取RGB部分
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);

        // 生成RGBA顏色字符串
        const rgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

        // 更新顏色預覽
        colorPreview.style.background = rgbaColor;

        // 更新滑塊顏色 - 確保每次都更新
        updateSliderThumbColor(hexColor);

        // 優先顯示HEX格式，但保存RGBA格式
        textInput.value = hexColor;

        // 更新設定並應用
        settings[varId] = rgbaColor;
        applyThemeSetting(varId, rgbaColor);
        context.saveSettingsDebounced();

        // 觸發自定義事件，通知顏色已變更
        document.dispatchEvent(new CustomEvent('colorChanged', {
            detail: { varId, value: rgbaColor, hexColor }
        }));
    }

    // 更新顏色和透明度的函數 (Function to update color and alpha)
    function updateColorAndAlpha() {
        const hexColor = colorInput.value;
        const alpha = alphaSlider.value / 100;

        // 從HEX色碼獲取RGB部分
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);

        // 生成RGBA顏色字符串
        const rgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

        // 更新顏色預覽
        colorPreview.style.background = rgbaColor;

        // 確保更新滑塊顏色
        updateSliderThumbColor(hexColor);

        // 更新設定並應用
        settings[varId] = rgbaColor;
        applyThemeSetting(varId, rgbaColor);
        context.saveSettingsDebounced();
    }

    // 組裝透明度控制 (Assemble opacity control)
    alphaRow.appendChild(alphaSlider);
    alphaRow.appendChild(alphaValue);
    alphaContainer.appendChild(alphaLabel);
    alphaContainer.appendChild(alphaRow);

    // 添加到容器 (Add to container)
    colorPickerContainer.appendChild(colorPreview);
    colorPickerContainer.appendChild(textInput);
    colorPickerContainer.appendChild(alphaContainer);
    colorPickerContainer.appendChild(colorInput); // 添加隱藏的顏色選擇器 (Add hidden color picker)

    container.appendChild(colorPickerContainer);
}

/**
* 創建滑桿設定項
* Create slider setting item
* @param {HTMLElement} container - 設定容器元素 (Setting container element)
* @param {Object} setting - 設定設定對象 (Setting configuration object)
* @param {Object} settings - 當前設定值對象 (Current settings object)
*/
function createSlider(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue, min, max, step } = setting;

    // 創建滑桿容器 (Create slider container)
    const sliderContainer = document.createElement('div');
    sliderContainer.style.display = 'flex';
    sliderContainer.style.alignItems = 'center';
    sliderContainer.style.gap = '10px';
    sliderContainer.style.maxWidth = '480px';

    // 創建滑桿 (Create slider)
    const slider = document.createElement('input');
    slider.id = `cts-slider-${varId}`;
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.step = step;
    slider.value = settings[varId] || defaultValue;
    slider.classList.add('moonlit-neo-range-input');
    slider.style.flex = '1';

    // 創建數值輸入 (Create number input)
    const numberInput = document.createElement('input');
    numberInput.id = `cts-number-${varId}`;
    numberInput.type = 'number';
    numberInput.min = min;
    numberInput.max = max;
    numberInput.step = step;
    numberInput.value = settings[varId] || defaultValue;
    numberInput.classList.add('moonlit-neo-range-input');
    numberInput.style.width = '60px';

    // 滑桿變更事件 (Slider change event)
    slider.addEventListener('input', () => {
        // 更新數值輸入 (Update number input)
        numberInput.value = slider.value;

        // 更新設定 (Update settings)
        settings[varId] = slider.value;

        // 應用設定 (Apply settings)
        applyThemeSetting(varId, slider.value);

        // 保存設定 (Save settings)
        context.saveSettingsDebounced();
    });

    // 數值輸入變更事件 (Number input change event)
    numberInput.addEventListener('change', () => {
        // 更新滑桿 (Update slider)
        slider.value = numberInput.value;

        // 更新設定 (Update settings)
        settings[varId] = numberInput.value;

        // 應用設定 (Apply settings)
        applyThemeSetting(varId, numberInput.value);

        // 保存設定 (Save settings)
        context.saveSettingsDebounced();
    });

    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(numberInput);
    container.appendChild(sliderContainer);
}

/**
 * 創建下拉選單設定項
 * Create dropdown menu setting item
 * @param {HTMLElement} container - 設定容器元素 (Setting container element)
 * @param {Object} setting - 設定設定對象 (Setting configuration object)
 * @param {Object} settings - 當前設定值對象 (Current settings object)
 */
function createSelect(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue, options } = setting;

    // 創建選擇器 (Create selector)
    const select = document.createElement('select');
    select.id = `cts-${varId}`;
    select.classList.add('widthNatural', 'flex1', 'margin0', 'moonlit-select'); // 添加專屬類別 (Add exclusive class)

    // 添加選項 (Add options)
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        optionElement.selected = (settings[varId] || defaultValue) === option.value;
        select.appendChild(optionElement);
    });

    // 選擇器變更事件 (Selector change event)
    select.addEventListener('change', () => {
        // 更新設定 (Update settings)
        settings[varId] = select.value;

        // 應用設定 (Apply settings)
        applyThemeSetting(varId, select.value);

        // 保存設定 (Save settings)
        context.saveSettingsDebounced();
    });

    container.appendChild(select);
}

/**
 * 創建文本輸入設定項
 * Create text input setting item
 * @param {HTMLElement} container - 設定容器元素 (Setting container element)
 * @param {Object} setting - 設定設定對象 (Setting configuration object)
 * @param {Object} settings - 當前設定值對象 (Current settings object)
 */
function createTextInput(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue } = setting;

    // 創建文本輸入 (Create text input)
    const input = document.createElement('input');
    input.id = `cts-${varId}`;
    input.type = 'text';
    input.value = settings[varId] || defaultValue;
    input.classList.add('text_pole', 'wide100p', 'widthNatural', 'flex1', 'margin0', 'moonlit-input'); // 添加專屬類別 (Add exclusive class)

    // 文本輸入變更事件 (Text input change event)
    input.addEventListener('change', () => {
        // 更新設定 (Update settings)
        settings[varId] = input.value;

        // 應用設定 (Apply settings)
        applyThemeSetting(varId, input.value);

        // 保存設定 (Save settings)
        context.saveSettingsDebounced();
    });

    container.appendChild(input);
}

/**
 * 創建單選框設定項
 * Create checkbox setting item
 * @param {HTMLElement} container - 設定容器元素 (Setting container element)
 * @param {Object} setting - 設定設定對象 (Setting configuration object)
 * @param {Object} settings - 當前設定值對象 (Current settings object)
 */
function createCheckbox(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue, displayText, cssBlock, cssFile, description } = setting;

    // 創建複選框容器，使用flex佈局 (Create checkbox container using flex layout)
    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');
    checkboxContainer.style.display = 'flex';
    checkboxContainer.style.flexDirection = 'column'; // 改為垂直排列 (Change to vertical arrangement)
    checkboxContainer.style.marginTop = '8px';

    // 創建水平排列的複選框和標籤行 (Create horizontally arranged checkbox and label row)
    const checkboxRow = document.createElement('div');
    checkboxRow.style.display = 'flex';
    checkboxRow.style.alignItems = 'center';

    // 創建複選框 (Create checkbox)
    const checkbox = document.createElement('input');
    checkbox.id = `cts-checkbox-${varId}`;
    checkbox.type = 'checkbox';
    checkbox.checked = settings[varId] === true;

    // 創建標籤 (Create label)
    const label = document.createElement('label');
    label.htmlFor = `cts-checkbox-${varId}`;
    label.textContent = displayText;
    label.style.marginLeft = '8px';
    label.style.cursor = 'pointer';

    // 處理單選框的動態CSS樣式表 (Handle dynamic CSS stylesheet for checkbox)
    let styleElement = document.getElementById(`css-block-${varId}`);
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = `css-block-${varId}`;
        document.head.appendChild(styleElement);
    }

    // 更新CSS樣式表的函數 - 內嵌CSS (Function to update CSS stylesheet - inline CSS)
    function updateInlineCssBlock(enabled) {
        if (styleElement && cssBlock) {
            styleElement.textContent = enabled ? cssBlock : '';
        }
    }

    // 從外部文件載入CSS的函數 (Function to load CSS from external file)
    async function loadExternalCss(enabled) {
        if (!enabled || !cssFile) {
            // 如果禁用或沒有指定文件，清空樣式 (If disabled or no file specified, clear styles)
            if (styleElement) {
                styleElement.textContent = '';
            }
            return;
        }

        try {
            // 構建CSS文件的完整路徑 (Build full path for CSS file)
            const cssFilePath = `${extensionFolderPath}/css/${cssFile}`;

            // 獲取CSS內容 (Get CSS content)
            const response = await fetch(cssFilePath);
            if (response.ok) {
                const cssText = await response.text();
                if (styleElement) {
                    styleElement.textContent = cssText;
                }
            } else {
                console.error(`[${EXTENSION_NAME}]`, `無法載入CSS文件: ${cssFile}`, response.status);
            }
        } catch (error) {
            console.error(`[${EXTENSION_NAME}]`, `載入CSS文件時出錯: ${cssFile}`, error);
        }
    }

    // 應用CSS的主函數 (Main function to apply CSS)
    async function applyCss(enabled) {
        if (cssFile) {
            // 如果指定了外部文件，優先使用外部文件 (If external file specified, prioritize using external file)
            await loadExternalCss(enabled);
        } else if (cssBlock) {
            // 否則使用內嵌的CSS塊 (Otherwise use inline CSS block)
            updateInlineCssBlock(enabled);
        }
    }

    // 初始應用CSS (Initial CSS application)
    applyCss(checkbox.checked);

    // 複選框變更事件 (Checkbox change event)
    checkbox.addEventListener('change', () => {
        // 更新設定 (Update settings)
        settings[varId] = checkbox.checked;

        // 應用或移除CSS (Apply or remove CSS)
        applyCss(checkbox.checked);

        // 應用設定 (Apply settings)
        applyThemeSetting(varId, checkbox.checked ? 'true' : 'false');

        // 保存設定 (Save settings)
        context.saveSettingsDebounced();
    });

    // 添加到行容器 (Add to row container)
    checkboxRow.appendChild(checkbox);
    checkboxRow.appendChild(label);

    // 將行容器添加到主容器 (Add row container to main container)
    checkboxContainer.appendChild(checkboxRow);

    // 如果有描述，創建描述元素並添加 (If there is a description, create and add description element)
    if (description) {
        const descriptionElement = document.createElement('small');
        descriptionElement.textContent = description;
        descriptionElement.style.marginLeft = '44px';
        descriptionElement.style.opacity = '0.7';
        descriptionElement.style.fontSize = '0.85em';
        checkboxContainer.appendChild(descriptionElement);
    }

    // 添加到容器 (Add to container)
    container.appendChild(checkboxContainer);
}

/**
 * 初始化聊天外觀切換器
 * Initialize chat appearance switcher
 * 處理不同聊天樣式的切換
 * Handle switching between different chat styles
 */
function initChatDisplaySwitcher() {
    // 獲取選擇器元素 (Get selector elements)
    const themeSelect = document.getElementById("themes");
    const chatDisplaySelect = document.getElementById("chat_display");

    if (!themeSelect || !chatDisplaySelect) {
        console.error(`[${EXTENSION_NAME}]`, 'Theme or chat display selectors not found');
        return;
    }

    let newEchoOption, newWhisperOption, newHushOption, newRippleOption, newTideOption, newVeilOption;

    // 添加自定義樣式選項 (Add custom style options)
    function addCustomStyleOptions() {
        // 檢查並添加Echo選項 (Check and add Echo option)
        if (!newEchoOption) {
            newEchoOption = document.createElement("option");
            newEchoOption.value = "3";
            newEchoOption.text = t`Echo`;
            chatDisplaySelect.appendChild(newEchoOption);
        }

        // 檢查並添加Whisper選項 (Check and add Whisper option)
        if (!newWhisperOption) {
            newWhisperOption = document.createElement("option");
            newWhisperOption.value = "4";
            newWhisperOption.text = t`Whisper`;
            chatDisplaySelect.appendChild(newWhisperOption);
        }

        // 檢查並添加Hush選項 (Check and add Hush option)
        if (!newHushOption) {
            newHushOption = document.createElement("option");
            newHushOption.value = "5";
            newHushOption.text = t`Hush`;
            chatDisplaySelect.appendChild(newHushOption);
        }

        // 檢查並添加Ripple選項 (Check and add Ripple option)
        if (!newRippleOption) {
            newRippleOption = document.createElement("option");
            newRippleOption.value = "6";
            newRippleOption.text = t`Ripple`;
            chatDisplaySelect.appendChild(newRippleOption);
        }

        // 檢查並添加Tide選項 (Check and add Tide option)
        if (!newTideOption) {
            newTideOption = document.createElement("option");
            newTideOption.value = "7";
            newTideOption.text = t`Tide`;
            chatDisplaySelect.appendChild(newTideOption);
        }
    }

    // 套用聊天樣式 (Apply chat style)
    function applyChatDisplayStyle() {
        // 移除所有可能的樣式類 (Remove all possible style classes)
        document.body.classList.remove(
            "flatchat",
            "bubblechat",
            "documentstyle",
            "echostyle",
            "whisperstyle",
            "hushstyle",
            "ripplestyle",
            "tidestyle",
        );

        // 根據選擇套用樣式 (Apply style based on selection)
        switch (chatDisplaySelect.value) {
            case "0": document.body.classList.add("flatchat"); break;
            case "1": document.body.classList.add("bubblechat"); break;
            case "2": document.body.classList.add("documentstyle"); break;
            case "3": document.body.classList.add("echostyle"); break;
            case "4": document.body.classList.add("whisperstyle"); break;
            case "5": document.body.classList.add("hushstyle"); break;
            case "6": document.body.classList.add("ripplestyle"); break;
            case "7": document.body.classList.add("tidestyle"); break;
        }
    }

    // 主題變更事件處理 (Theme change event handling)
    themeSelect.addEventListener("change", function() {
        addCustomStyleOptions();
        localStorage.setItem("savedTheme", themeSelect.value);
        applyChatDisplayStyle();
    });

    // 聊天樣式變更事件處理 (Chat style change event handling)
    chatDisplaySelect.addEventListener("change", function() {
        applyChatDisplayStyle();
        localStorage.setItem("savedChatStyle", chatDisplaySelect.value);
    });

    // 從localStorage恢復設定 (Restore settings from localStorage)
    const savedTheme = localStorage.getItem("savedTheme");
    const savedChatStyle = localStorage.getItem("savedChatStyle");

    // 應用已保存的設定 (Apply saved settings)
    if (savedTheme) {
        themeSelect.value = savedTheme;
    }

    addCustomStyleOptions();

    if (savedChatStyle) {
        chatDisplaySelect.value = savedChatStyle;
    }

    applyChatDisplayStyle();
}

/**
* 初始化頭像注入器
* Initialize avatar injector
* 將頭像URL注入到訊息元素作為CSS變量
* Inject avatar URL into message elements as CSS variables
*/
function initAvatarInjector() {
    // 更新所有訊息的頭像 (Update avatars for all messages)
    function updateAvatars() {
        document.querySelectorAll('.mes').forEach(mes => {
            // 跳過已處理的元素 (Skip already processed elements)
            if (mes.dataset.avatar) return;

            // 找到頭像圖像 (Find avatar image)
            const avatarImg = mes.querySelector('.avatar img');
            if (!avatarImg) {
                return;
            }

            // 獲取圖像源 (Get image source)
            let src = avatarImg.src || avatarImg.getAttribute('data-src');
            if (!src) return;

            // 轉換絕對URL為相對路徑 (Convert absolute URL to relative path)
            if (src.startsWith(window.location.origin)) {
                src = src.replace(window.location.origin, '');
            }

            // 添加加載事件 (Add load event)
            avatarImg.addEventListener('load', () => {
                let loadedSrc = avatarImg.src;
                if (loadedSrc.startsWith(window.location.origin)) {
                    loadedSrc = loadedSrc.replace(window.location.origin, '');
                }
                mes.dataset.avatar = loadedSrc;
                mes.style.setProperty('--mes-avatar-url', `url('${mes.dataset.avatar}')`);
            }, { once: true });

            // 如果圖像已加載，立即更新 (If image is already loaded, update immediately)
            if (avatarImg.complete && src && !src.endsWith("/")) {
                mes.dataset.avatar = src;
                mes.style.setProperty('--mes-avatar-url', `url('${mes.dataset.avatar}')`);
            }
        });
    }

    // 初始執行 (Initial execution)
    updateAvatars();

    // 使用防抖的MutationObserver回調 (Use debounced MutationObserver callback)
    let debounceTimer;
    const observerCallback = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            updateAvatars();
        }, 100);
    };

    // 觀察聊天容器的變化 (Observe changes to chat container)
    const chatContainer = document.getElementById('chat');
    if (chatContainer) {
        const observer = new MutationObserver(observerCallback);
        observer.observe(chatContainer, { childList: true, subtree: true });
    }

    // 公開更新函數 (Expose update function)
    window.updateAvatars = updateAvatars;
}

/**
* 應用所有主題設定
* Apply all theme settings
* 從設定中應用所有CSS變量
* Apply all CSS variables from settings
*/
function applyAllThemeSettings() {
    const context = SillyTavern.getContext();
    const settings = context.extensionSettings[settingsKey];

    // 確保有專用的style元素 (Ensure dedicated style element)
    let themeStyleElement = document.getElementById('dynamic-theme-styles');
    if (!themeStyleElement) {
        themeStyleElement = document.createElement('style');
        themeStyleElement.id = 'dynamic-theme-styles';
        document.head.appendChild(themeStyleElement);
    }

    // 構建CSS變量定義 (Build CSS variable definitions)
    let cssVars = ':root {\n';

    // 處理所有設定項 (Process all settings)
    themeCustomSettings.forEach(setting => {
        const { varId } = setting;
        const value = settings[varId];

        if (value !== undefined) {
            cssVars += `  --${varId}: ${value} !important;\n`;
        }
    });

    cssVars += '}';

    // 應用CSS變量 (Apply CSS variables)
    themeStyleElement.textContent = cssVars;

    console.debug(`[${EXTENSION_NAME}]`, 'Applied all theme settings');
}


/**
* 應用單個主題設定
* Apply single theme setting
* @param {string} varId - CSS變量ID (CSS variable ID)
* @param {string} value - 設定值 (Setting value)
*/
function applyThemeSetting(varId, value) {
    // 直接設定CSS變量 (Directly set CSS variable)
    document.documentElement.style.setProperty(`--${varId}`, value, 'important');

    // 觸發自定義事件 (Trigger custom event)
    document.dispatchEvent(new CustomEvent('themeSettingChanged', {
        detail: { varId, value }
    }));

    console.debug(`[${EXTENSION_NAME}]`, `Applied setting: --${varId} = ${value}`);
}

/**
 * 將RGBA轉換為HEX - 增強版
 * Convert RGBA to HEX - enhanced version
 * 支援更多格式和更好的錯誤處理
 * Support more formats and better error handling
 * @param {string} rgba - RGBA顏色字符串 (RGBA color string)
 * @returns {string|null} HEX顏色字符串或null (HEX color string or null)
 */
function rgbaToHex(rgba) {
    // 檢查空值 (Check empty value)
    if (!rgba) {
        return null;
    }

    // 檢查是否是CSS變數格式 (Check if it's CSS variable format)
    if (rgba.startsWith('var(--')) {
        return null;
    }

    // 如果已經是HEX格式，直接返回 (If already in HEX format, return directly)
    if (rgba.startsWith('#')) {
        return rgba;
    }

    // 嘗試匹配RGBA/RGB格式 (Try to match RGBA/RGB format)
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)/);
    if (!match) return null;

    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);

    // 確保值在有效範圍內 (Ensure values are in valid range)
    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        return null;
    }

    // 轉換為HEX格式 (Convert to HEX format)
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * 從RGBA字符串獲取透明度值 - 增強版
 * Get opacity value from RGBA string - enhanced version
 * @param {string} rgba - RGBA顏色字符串 (RGBA color string)
 * @returns {number} 透明度值，預設為1 (Opacity value, default is 1)
 */
function getAlphaFromRgba(rgba) {
    // 檢查空值 (Check empty value)
    if (!rgba) {
        return 1;
    }

    // 檢查是否是CSS變數格式 (Check if it's CSS variable format)
    if (rgba.startsWith('var(--')) {
        return 1;
    }

    // 如果是HEX格式 (If in HEX format)
    if (rgba.startsWith('#')) {
        return 1;
    }

    // 嘗試匹配RGBA格式 (Try to match RGBA format)
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)/);
    if (!match) return 1;

    // 返回透明度或預設值 (Return opacity or default value)
    return match[4] ? Math.min(Math.max(parseFloat(match[4]), 0), 1) : 1; // 確保值在0-1範圍內 (Ensure value is in 0-1 range)
}

/**
 * 支援十六進制顏色轉為RGBA的助手函數
 * Helper function supporting conversion of hexadecimal color to RGBA
 * @param {string} hex - HEX顏色代碼 (例如 "#FF0000") (HEX color code (e.g. "#FF0000"))
 * @param {number} alpha - 透明度值 (0-1) (Opacity value (0-1))
 * @returns {string} RGBA格式的顏色字符串 (RGBA format color string)
 */
function hexToRgba(hex, alpha = 1) {
    if (!hex) return 'rgba(0, 0, 0, 1)';

    // 嘗試處理各種格式 (Try to handle various formats)
    try {
        // 移除井號（如果存在） (Remove hash (if exists))
        hex = hex.replace('#', '');

        // 處理簡寫形式 (例如 #F00) (Handle abbreviated form (e.g. #F00))
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }

        // 確保有效的HEX格式 (Ensure valid HEX format)
        if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
            return 'rgba(0, 0, 0, 1)';
        }

        // 取得RGB值 (Get RGB values)
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // 確保alpha在有效範圍 (Ensure alpha is in valid range)
        const validAlpha = Math.min(Math.max(alpha, 0), 1);

        // 返回RGBA格式 (Return RGBA format)
        return `rgba(${r}, ${g}, ${b}, ${validAlpha})`;
    } catch (e) {
        console.error(`[${EXTENSION_NAME}]`, 'Error converting HEX to RGBA:', e);
        return 'rgba(0, 0, 0, 1)';
    }
}

/**
 * 嘗試將任何顏色格式轉換為有效的顏色值
 * Try to convert any color format to valid color value
 * 支援HEX, RGB, RGBA格式
 * Support HEX, RGB, RGBA formats
 * @param {string} color - 輸入的顏色字符串 (Input color string)
 * @returns {Object} 帶有hex和rgba屬性的對象，如果無效則為null (Object with hex and rgba properties, or null if invalid)
 */
function parseColorValue(color) {
    if (!color) return null;

    // 標准化空格 (Standardize spaces)
    color = color.trim();

    // 檢查HEX格式 (Check HEX format)
    if (color.startsWith('#')) {
        const hex = color;
        const alpha = 1;
        return {
            hex: hex,
            rgba: hexToRgba(hex, alpha),
            alpha: alpha
        };
    }

    // 檢查RGB/RGBA格式 (Check RGB/RGBA format)
    const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)/);
    if (rgbaMatch) {
        const r = parseInt(rgbaMatch[1]);
        const g = parseInt(rgbaMatch[2]);
        const b = parseInt(rgbaMatch[3]);
        const alpha = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1;

        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;

        return {
            hex: hex,
            rgba: rgba,
            alpha: alpha
        };
    }

    // 如果都不匹配，返回null (If nothing matches, return null)
    return null;
}

/**
* 從RGBA字符串獲取RGB部分
* Get RGB part from RGBA string
* @param {string} rgba - RGBA顏色字符串 (RGBA color string)
* @returns {string} RGB部分字符串 (RGB part string)
*/
function getRgbPartFromRgba(rgba) {
    // 檢查是否是CSS變數格式 (Check if it's CSS variable format)
    if (!rgba || rgba.startsWith('var(--')) {
        return '0, 0, 0';
    }

    // 嘗試匹配RGBA格式 (Try to match RGBA format)
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)/);
    if (!match) return '0, 0, 0';

    // 返回RGB部分 (Return RGB part)
    return `${match[1]}, ${match[2]}, ${match[3]}`;
}

/**
* 動態添加一個新的自定義設定
* Dynamically add a new custom setting
* 使用此函數可以在運行時添加新的設定項
* Use this function to add new settings at runtime
* @param {Object} settingConfig - 設定設定對象 (Setting configuration object)
*/
function addCustomSetting(settingConfig) {
    // 檢查設定有效性 (Check setting validity)
    if (!settingConfig || !settingConfig.varId || !settingConfig.type) {
        console.error(`[${EXTENSION_NAME}]`, 'Invalid setting configuration', settingConfig);
        return;
    }

    // 檢查是否已存在 (Check if already exists)
    const existing = themeCustomSettings.find(s => s.varId === settingConfig.varId);
    if (existing) {
        console.warn(`[${EXTENSION_NAME}]`, `Setting with varId ${settingConfig.varId} already exists`);
        return;
    }

    // 添加到設定設定 (Add to setting configuration)
    themeCustomSettings.push(settingConfig);

    // 獲取設定並添加默認值 (Get settings and add default value)
    const context = SillyTavern.getContext();
    const settings = context.extensionSettings[settingsKey];

    // 如果設定中沒有此項，添加默認值 (If settings don't have this item, add default value)
    if (settings[settingConfig.varId] === undefined) {
        settings[settingConfig.varId] = settingConfig.default;
    }

    // 保存設定 (Save settings)
    context.saveSettingsDebounced();

    // 重新渲染設定面板 (Re-render settings panel)
    const settingsContainer = document.querySelector(`#${settingsKey}-drawer .inline-drawer-content`);
    if (settingsContainer) {
        // 清空現有設定項（保留啟用開關） (Clear existing settings (keep enable switch))
        const enabledCheckbox = settingsContainer.querySelector(`#${settingsKey}-enabled`).parentElement;
        const separator = settingsContainer.querySelector('hr');

        // 清空子元素 (Clear child elements)
        while (settingsContainer.lastChild) {
            settingsContainer.removeChild(settingsContainer.lastChild);
        }

        // 重新添加啟用開關 (Re-add enable switch)
        settingsContainer.appendChild(enabledCheckbox);
        settingsContainer.appendChild(separator);

        // 重新創建設定項 (Recreate settings)
        createCustomSettingsUI(settingsContainer, settings);
    }

    console.debug(`[${EXTENSION_NAME}]`, `Added new setting: ${settingConfig.varId}`);
}


// 公開API (Public API)
window.MoonlitEchoesTheme = {
    // 初始化函數 (Initialization function)
    init: function() {
        applyAllThemeSettings();
        initializeThemeColorOnDemand();
        syncMoonlitPresetsWithThemeList();
    },

    // 添加新設定 (Add new setting)
    addSetting: addCustomSetting,

    // 應用設定 (Apply setting)
    applySetting: applyThemeSetting,

    // 獲取所有設定 (Get all settings)
    getSettings: function() {
        const context = SillyTavern.getContext();
        return context.extensionSettings[settingsKey];
    },

    // 獲取設定設定 (Get setting configuration)
    getSettingsConfig: function() {
        return [...themeCustomSettings];
    },

    // 預設管理 (Preset management)
    presets: {
        // 獲取所有預設 (Get all presets)
        getAll: function() {
            const context = SillyTavern.getContext();
            return context.extensionSettings[settingsKey].presets || {};
        },

        // 獲取當前活動預設 (Get current active preset)
        getActive: function() {
            const context = SillyTavern.getContext();
            const settings = context.extensionSettings[settingsKey];
            return {
                name: settings.activePreset,
                settings: settings.presets[settings.activePreset] || {}
            };
        },

        // 創建新預設 (Create new preset)
        create: function(name, settingsObj) {
            const context = SillyTavern.getContext();
            const settings = context.extensionSettings[settingsKey];

            // 檢查名稱是否有效 (Check if name is valid)
            if (!name || typeof name !== 'string') {
                console.error(`[${EXTENSION_NAME}]`, 'Invalid preset name');
                return false;
            }

            // 創建新預設 (Create new preset)
            settings.presets[name] = settingsObj || {};

            // 保存設定 (Save settings)
            context.saveSettingsDebounced();

            // 更新主題選擇器 (Update theme selector)
            syncMoonlitPresetsWithThemeList();

            return true;
        },

        // 載入預設 (Load preset)
        load: function(name) {
            return loadPreset(name);
        },

        // 更新現有預設 (Update existing preset)
        update: function(name, settingsObj) {
            const context = SillyTavern.getContext();
            const settings = context.extensionSettings[settingsKey];

            // 檢查預設是否存在 (Check if preset exists)
            if (!settings.presets[name]) {
                console.error(`[${EXTENSION_NAME}]`, `Preset "${name}" not found`);
                return false;
            }

            // 更新預設 (Update preset)
            settings.presets[name] = settingsObj || settings.presets[name];

            // 保存設定 (Save settings)
            context.saveSettingsDebounced();

            return true;
        },

        // 刪除預設 (Delete preset)
        delete: function(name) {
            const context = SillyTavern.getContext();
            const settings = context.extensionSettings[settingsKey];

            // 檢查是否是Default預設 (Check if it's the Default preset)
            if (name === 'Default') {
                console.error(`[${EXTENSION_NAME}]`, 'Cannot delete the Default preset');
                return false;
            }

            // 檢查預設是否存在 (Check if preset exists)
            if (!settings.presets[name]) {
                console.error(`[${EXTENSION_NAME}]`, `Preset "${name}" not found`);
                return false;
            }

            // 檢查是否是最後一個預設 (Check if it's the last preset)
            if (Object.keys(settings.presets).length <= 1) {
                console.error(`[${EXTENSION_NAME}]`, 'Cannot delete the only preset');
                return false;
            }

            // 如果刪除的是當前活動預設，切換到Default (If deleting current active preset, switch to Default)
            if (settings.activePreset === name) {
                settings.activePreset = 'Default';
                applyPresetToSettings('Default');
            }

            // 刪除預設 (Delete preset)
            delete settings.presets[name];

            // 保存設定 (Save settings)
            context.saveSettingsDebounced();

            // 更新主題選擇器 (Update theme selector)
            syncMoonlitPresetsWithThemeList();

            return true;
        },

        // 匯出預設為JSON (Export preset as JSON)
        export: function(name) {
            const context = SillyTavern.getContext();
            const settings = context.extensionSettings[settingsKey];

            // 檢查預設是否存在 (Check if preset exists)
            if (!settings.presets[name]) {
                console.error(`[${EXTENSION_NAME}]`, `Preset "${name}" not found`);
                return null;
            }

            // 創建匯出對象 (Create export object)
            return {
                moonlitEchoesPreset: true,
                presetVersion: THEME_VERSION,
                presetName: name,
                settings: settings.presets[name]
            };
        },

        // 匯入預設 (Import preset)
        import: function(jsonData) {
            // 檢查格式 (Check format)
            if (!jsonData || !jsonData.moonlitEchoesPreset || !jsonData.presetName || !jsonData.settings) {
                console.error(`[${EXTENSION_NAME}]`, 'Invalid preset format');
                return false;
            }

            const context = SillyTavern.getContext();
            const settings = context.extensionSettings[settingsKey];

            // 獲取預設名稱 (Get preset name)
            const presetName = jsonData.presetName;

            // 創建/更新預設 (Create/update preset)
            settings.presets[presetName] = jsonData.settings;

            // 保存設定 (Save settings)
            context.saveSettingsDebounced();

            // 更新主題選擇器 (Update theme selector)
            syncMoonlitPresetsWithThemeList();

            return true;
        }
    }
};

// 公開初始化函數以供外部調用 (Expose initialization function for external call)
window.initializeThemeColorOnDemand = function() {
    applyAllThemeSettings();
    syncMoonlitPresetsWithThemeList();
};

// 同步 Moonlit 預設與主題列表 (Sync Moonlit presets with theme list)
function syncMoonlitPresetsWithThemeList() {
    const context = SillyTavern.getContext();
    const settings = context.extensionSettings[settingsKey];
    const themeSelector = document.getElementById('themes');

    if (!themeSelector) return;

    // 獲取所有預設
    const presets = settings.presets || {};

    // 創建已存在於主題選擇器中的預設選項集合
    const existingPresetOptions = new Set();

    // 識別哪些預設選項已在主題選擇器中
    Array.from(themeSelector.options).forEach(option => {
        // 檢查這個選項是否對應我們的某個預設
        if (Object.keys(presets).includes(option.value)) {
            existingPresetOptions.add(option.value);
        }
    });

    // 查找並移除已不存在的預設選項（從 UI Theme 選擇器中刪除已刪除的預設）
    for (let i = themeSelector.options.length - 1; i >= 0; i--) {
        const option = themeSelector.options[i];
        const optionValue = option.value;

        // 如果選項對應一個預設，但該預設已被刪除，則從選擇器中移除
        if (existingPresetOptions.has(optionValue) && !presets[optionValue]) {
            themeSelector.remove(i);
        }
    }

    // 完全不添加任何預設到主題選擇器，包括官方預設
    // 這部分代碼已移除

    // 如果當前主題是我們的預設，且它存在於主題選擇器中，確保選擇正確
    if (settings.enabled) {
        const activePreset = settings.activePreset;

        // 檢查是否在選擇器中存在這個選項
        let optionExists = false;
        for (let i = 0; i < themeSelector.options.length; i++) {
            if (themeSelector.options[i].value === activePreset) {
                optionExists = true;
                break;
            }
        }

        // 只有當選項存在時才同步選擇
        if (optionExists && themeSelector.value !== activePreset) {
            themeSelector.value = activePreset;
        }
    }
}

// 確保在頁面加載完成後添加現代緊湊樣式 (Ensure modern compact styles are added after page load)
document.addEventListener('DOMContentLoaded', function() {
    // 在適當的時機添加現代緊湊樣式 (Add modern compact styles at the appropriate time)
    addModernCompactStyles();

    // 同步Moonlit預設與主題列表 (Sync Moonlit presets with theme list)
    syncMoonlitPresetsWithThemeList();
});

// 透明度滑桿的顏色更新
function updateColorSliderThumb(varId, hexColor) {
    const alphaSlider = document.querySelector(`#cts-${varId}-alpha`);
    if (!alphaSlider) return;

    // 查找或創建該滑桿的樣式元素
    let styleElement = document.getElementById(`thumb-style-${varId}`);
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = `thumb-style-${varId}`;
        document.head.appendChild(styleElement);
    }

    // 創建新的滑塊樣式
    const newThumbStyle = `
        #cts-${varId}-alpha::-webkit-slider-thumb {
            appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${hexColor};
            border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            cursor: pointer;
        }
        #cts-${varId}-alpha::-moz-range-thumb {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${hexColor};
            border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 10%, transparent);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            cursor: pointer;
        }
    `;

    // 更新樣式
    styleElement.textContent = newThumbStyle;
}
document.addEventListener('colorChanged', function(event) {
    const { varId, hexColor } = event.detail;
    // 更新對應的顏色滑塊
    updateColorSliderThumb(varId, hexColor);
});
