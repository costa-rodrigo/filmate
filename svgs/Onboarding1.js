import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import FilmateLogo from '../../svgs/filmate-logo.svg';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect, G, Path } from 'react-native-svg';

export default function Onboarding1(props) {
    return (
        <View style={styles.onboardingImage}>
            <Svg id="Group_1757" data-name="Group 1757" xmlns="http://www.w3.org/2000/svg" width="264" height="240" viewBox="0 0 264 240">
                <Rect id="Rectangle_397" data-name="Rectangle 397" width="264" height="240" fill="none"/>
                <G id="Group_1477" data-name="Group 1477">
                    <G id="Group_1472" data-name="Group 1472">
                    <Path id="Path_308" data-name="Path 308" d="M126.763,169.722a111.086,111.086,0,0,0,25.711-1.072c-.434-.569-.877-1.131-1.335-1.681q.873-3.609,1.737-7.214c-.071-.08-.147-.16-.219-.239-.426-.462-.848-.928-1.271-1.4a56.641,56.641,0,0,0-23.754-3.015c-4.359.382-8.665,1.271-13.031,1.5a30.082,30.082,0,0,1-6.494-.311q-.979,4.965-1.808,9.967a110.809,110.809,0,0,0,18,3.255C125.118,169.591,125.942,169.662,126.763,169.722Z" fill="#fff"/>
                    <Path id="Path_309" data-name="Path 309" d="M166.243,201.122c-2.884-14.328-7.008-24.436-13.371-32.775l-.182-.237-.295.047a110.531,110.531,0,0,1-25.6,1.066c-.816-.058-1.637-.131-2.454-.21a110.663,110.663,0,0,1-17.917-3.24l-.533-.143-.09.544c-1.684,10.161-2.92,20.517-3.671,30.781l1,.072c.735-10.05,1.936-20.19,3.57-30.147a111.771,111.771,0,0,0,17.548,3.129c.824.079,1.653.152,2.476.212a111.926,111.926,0,0,0,25.53-1.029,59.289,59.289,0,0,1,7.168,12.471.442.442,0,0,0-.055-.016,40.519,40.519,0,0,1-5.821-.832c-6.07-1.354-11.942-4.546-15.159-10.05a.4.4,0,0,0-.688.4,19.144,19.144,0,0,0,3.229,4.1,25.019,25.019,0,0,0,11.218,6.006.41.41,0,0,0,0,.139,105.351,105.351,0,0,1,2.244,15.065c.039.509.836.512.8,0a106.688,106.688,0,0,0-2.213-14.995,41.006,41.006,0,0,0,6.389.963.324.324,0,0,0,.319-.156,100.411,100.411,0,0,1,5.574,19.031Z" fill="#fff"/>
                    <Path id="Path_310" data-name="Path 310" d="M156.816,163.324a8.454,8.454,0,0,0,5.326,1.546c3.367-.311,5.988-3.315,6.928-6.561.932-3.227.554-6.661.163-10a36.4,36.4,0,0,1-10.186.1q-10.875-10.056-21.755-20.118l-.036.008q-1.147-5.58-2.294-11.166a9.189,9.189,0,0,0-1.809-4.506,8.482,8.482,0,0,0-2.777-1.8,56.055,56.055,0,0,0-12.13-4.008c-.506-.1-1.147-.151-1.43.279-.319.482.091,1.108.5,1.514a15.135,15.135,0,0,0,5.493,3.47,2.3,2.3,0,0,0-.856.223.857.857,0,0,0-.474.808c.063.435.529.666.94.809a17.275,17.275,0,0,0,2.944.753,5.2,5.2,0,0,0-1.618,2.621,8.716,8.716,0,0,0-.207,3.159,13.218,13.218,0,0,0,4.821,8.9C131.35,141.622,155.334,162.344,156.816,163.324Z" fill="#fff"/>
                    <Path id="Path_311" data-name="Path 311" d="M137.474,128.42,149.342,138.9q0-4.751,0-9.5a.4.4,0,0,1,.8,0q0,4.872,0,9.745a.354.354,0,0,1-.167.312l5.686,5.023,5.217,4.608c.385.34-.18.9-.563.563l-18.185-16.062-5.217-4.608C136.525,128.644,137.091,128.082,137.474,128.42Z" fill="#fff"/>
                    <Path id="Path_312" data-name="Path 312" d="M122.1,113.476a.989.989,0,0,1,.1-1.415,3.981,3.981,0,0,1,2.088-.572c.865-.121,1.736-.2,2.609-.24a27.489,27.489,0,0,1,5.12.278c.506.073.291.841-.212.768a26.047,26.047,0,0,0-8.261.112c-.218.039-.863.086-.907.377-.038.247.4.392.562.454.613.236,1.256.414,1.887.59a32.208,32.208,0,0,0,3.96.833c.469.069.313.752-.106.783a9.14,9.14,0,0,0-2.643.571,4.905,4.905,0,0,0-2.3,1.565c-.461.723.43.7.9.6.5-.111,1.006-.23,1.509-.345l3.207-.732c.42-.1.732.521.307.728a8.976,8.976,0,0,0-3.892,3.628c-.137.241-.714,1.147-.317,1.273.346.111.96-.2,1.269-.306a14.3,14.3,0,0,0,2.83-1.365c.37-.229.694.209.545.545q-.369.833-.737,1.666a.341.341,0,0,1-.043.06,8.4,8.4,0,0,0,2.391,10.4c.4.305.007,1-.4.688a9.216,9.216,0,0,1-2.554-11.74c0-.006.008-.008.012-.014l.143-.324a14.541,14.541,0,0,1-2.558,1.046,1.769,1.769,0,0,1-1.412,0,1.039,1.039,0,0,1-.361-1.258,8.123,8.123,0,0,1,1.838-2.878,9.53,9.53,0,0,1,.939-.869l-2.125.486a2.844,2.844,0,0,1-1.721.091,1.082,1.082,0,0,1-.7-1.148c.13-1.081,1.528-1.883,2.408-2.3a8.571,8.571,0,0,1,1.231-.467c-.951-.2-1.9-.446-2.825-.738A3.829,3.829,0,0,1,122.1,113.476Z" fill="#f03349"/>
                    <Path id="Path_313" data-name="Path 313" d="M173.761,147.448a273.576,273.576,0,0,0-2.419-29.344c-.434-3.156-.947-6.209-2.434-8.849a13.393,13.393,0,0,0-10.6-6.635l-.217-.014-.157.149c-.192.181-.4.35-.6.52q-6.744-2.894-13.491-5.795l-1.514-6.4-.574.308a5.593,5.593,0,0,0-.873.582,58.064,58.064,0,0,1-.446-10.68,3.857,3.857,0,0,0,2.265-1.119,7.484,7.484,0,0,0,1.709-3.3,9.642,9.642,0,0,0,.456-3.433,4.938,4.938,0,0,0-1.453-3.285,3.458,3.458,0,0,0-3.585-.763,2.926,2.926,0,0,0-1.274,1.031l-.008-.015a28.072,28.072,0,0,0-4.323-7.036,16.005,16.005,0,0,0-1.287-1.291,12.011,12.011,0,0,0-8.34-3.334,11.309,11.309,0,0,0-9.012,5.726,15.573,15.573,0,0,0-2.052,7.145,20.587,20.587,0,0,0,.11,3.446,36.182,36.182,0,0,0,3.127,10.28,22.954,22.954,0,0,0,3.414,5.8,10.3,10.3,0,0,0,4.361,3.047l-.923,3.3-.027-.026-.23-.24-.309.119a47.359,47.359,0,0,1-9.01,2.147c-1.118.189-2.236.38-3.345.6-3.821.75-8.645,2.048-12.073,5.462a15.967,15.967,0,0,0-2.439,3.183,35.724,35.724,0,0,0-3.462,9.609c-1.212,5-2.279,10.039-3.173,14.994-.1.54-.192,1.083-.284,1.625l-.056.33.283.177c.593.372,4.861,1.758,12.031,4.028l1.6.506q-.169.707-.345,1.411l-.915,13.3.286.153a19.013,19.013,0,0,0,5.871,1.92,30.691,30.691,0,0,0,6.6.317c2.492-.13,4.994-.476,7.415-.813,1.844-.256,3.752-.521,5.633-.686a56.355,56.355,0,0,1,23.544,2.989l.338.119,7.707-9.762a36.908,36.908,0,0,0,14.128-1l.38-.1ZM125.292,93.37a9.12,9.12,0,0,1-4.351-2.885,22.053,22.053,0,0,1-3.254-5.552,35.276,35.276,0,0,1-3.047-9.989,19.535,19.535,0,0,1-.106-3.277,14.6,14.6,0,0,1,1.915-6.689,10.3,10.3,0,0,1,8.19-5.236,11.018,11.018,0,0,1,7.635,3.08,14.987,14.987,0,0,1,1.207,1.21,27.254,27.254,0,0,1,4.161,6.788c.155.338.306.671.457,1.008l.608,1.361.335-1.453a2.032,2.032,0,0,1,1.168-1.423,2.481,2.481,0,0,1,2.525.568,4,4,0,0,1,1.137,2.628,8.682,8.682,0,0,1-.42,3.084A6.586,6.586,0,0,1,142,79.46a2.789,2.789,0,0,1-2.007.842l-.495-.025-.03.5a58.947,58.947,0,0,0,.575,12.335l.173,1.14.713-.906a3.939,3.939,0,0,1,.744-.719L142.99,98.2l.231.1q6.608,2.844,13.222,5.681c-.076.057-.15.117-.227.172-.158.114-.32.224-.482.332q-.311.208-.63.4c-.17.1-.343.205-.517.3-.217.123-.437.24-.66.354-.179.092-.359.183-.543.269-.228.108-.46.209-.693.307-.186.079-.371.159-.56.232-.241.093-.487.178-.733.262-.188.064-.374.13-.563.189-.261.08-.526.15-.792.219-.18.048-.359.1-.541.143-.3.069-.6.125-.9.181-.155.028-.308.064-.464.089-.46.074-.922.134-1.388.176a24.683,24.683,0,0,1-12.65-2.42q-.638-.3-1.27-.635c-.132-.07-.262-.149-.394-.221-.289-.158-.578-.316-.864-.485-.157-.093-.312-.195-.468-.291-.26-.159-.52-.316-.778-.484-.169-.111-.336-.23-.5-.344-.243-.165-.486-.327-.727-.5-.174-.124-.346-.258-.519-.387-.233-.173-.467-.344-.7-.525-.173-.135-.344-.279-.516-.419-.229-.185-.459-.368-.686-.561-.17-.144-.337-.295-.505-.443-.228-.2-.457-.4-.683-.606-.163-.15-.325-.307-.487-.46-.188-.178-.376-.356-.562-.539L125.78,93.5Zm43.866,54.445a35.743,35.743,0,0,1-10.045.1l-.282-.037-7.617,9.648a57.443,57.443,0,0,0-18.716-3.139c-1.642,0-3.282.071-4.911.215-1.9.167-3.826.434-5.683.691-2.4.333-4.881.678-7.328.806a29.673,29.673,0,0,1-6.388-.306,18.2,18.2,0,0,1-5.279-1.668l.854-12.52q.228-.912.445-1.832l.106-.45-2.481-.788c-3.331-1.053-9.958-3.151-11.51-3.786.071-.416.145-.832.219-1.244.889-4.934,1.953-9.959,3.16-14.932a34.86,34.86,0,0,1,3.351-9.339,14.975,14.975,0,0,1,2.284-2.983c3.237-3.224,7.878-4.466,11.56-5.19,1.1-.216,2.21-.4,3.32-.594a49.735,49.735,0,0,0,8.89-2.082q.208.213.415.413a36.621,36.621,0,0,0,10.151,7.3c.5.237,1.01.454,1.518.659.163.065.326.123.489.185.347.132.694.261,1.043.378.2.066.392.127.589.189.319.1.638.194.959.281.206.056.411.111.617.162.32.079.639.149.959.216.2.041.4.085.6.122.361.066.721.12,1.081.17.155.021.31.049.465.068q.753.09,1.5.132c.164.009.326.009.489.015.28.01.56.025.839.025.052,0,.1-.007.156-.007.624-.005,1.245-.027,1.86-.083a20.063,20.063,0,0,0,10.9-4.359l0,0,0,0,.631-.523-.016-.007c.032-.028.064-.053.095-.082a12.38,12.38,0,0,1,9.579,6.113c1.4,2.487,1.894,5.437,2.315,8.494a272.737,272.737,0,0,1,2.4,28.84A36.5,36.5,0,0,1,169.158,147.815Z" fill="#fff"/>
                    <Path id="Path_314" data-name="Path 314" d="M125.17,93.705a11.258,11.258,0,0,0,11.491-6.352c.22-.463.907-.059.688.4A12.019,12.019,0,0,1,125.17,94.5C124.667,94.443,124.661,93.646,125.17,93.705Z" fill="#fff"/>
                    <Path id="Path_315" data-name="Path 315" d="M126.92,87.561a3.516,3.516,0,0,0,2.617-1.225,3.465,3.465,0,0,0,.742-2.828.409.409,0,0,1,.278-.49.4.4,0,0,1,.49.278,4.225,4.225,0,0,1-4.127,5.062A.4.4,0,0,1,126.92,87.561Z" fill="#f03349"/>
                    <Path id="Path_316" data-name="Path 316" d="M153.371,86.47c-1.086-1.767-2.519-3.307-3.548-5.106-3.4-5.978-1.749-13.631-4.179-20.059-.056-.149-.111-.292-.176-.436v0a4.753,4.753,0,0,0,3.915-2.968,8.278,8.278,0,0,0,.032-5.565,10.246,10.246,0,0,0-4.087-5.768,6.748,6.748,0,0,0-6.86-.355,5.185,5.185,0,0,0-2.426,5.478,16.979,16.979,0,0,1,5.38,3.4,17.03,17.03,0,0,0-5.378-3.4,16.08,16.08,0,0,0-2.769-.807,16.909,16.909,0,0,0-15.36,5.088c-3.8,4.16-5.19,9.884-5.51,15.584-.065,1.127-.084,2.254-.079,3.367.055,6.632,1.011,13.339-.153,19.859,1.827.859,4.035.692,6.08.464,2.148-.236,4.462-.487,6.4.427.171-.6.338-1.215.51-1.818a9.558,9.558,0,0,1-4.6-3.043,22.2,22.2,0,0,1-3.334-5.676A35.249,35.249,0,0,1,114.143,75a19.861,19.861,0,0,1-.107-3.363v-.014c3.887.937,14.471-4.953,16.02-6.275a8.964,8.964,0,0,0,2.519-2.794.751.751,0,0,1,.065.056,13.773,13.773,0,0,1,1.076,1.265,27.932,27.932,0,0,1,4.416,6.9c.153.338.306.672.459,1.011a2.754,2.754,0,0,1,1.432-1.932,2.957,2.957,0,0,1,3.051.663,4.485,4.485,0,0,1,1.3,2.954,9.415,9.415,0,0,1-.441,3.261,6.96,6.96,0,0,1-1.581,3.084,3.281,3.281,0,0,1-2.384.988,58.356,58.356,0,0,0,.566,12.23A4.741,4.741,0,0,1,142,91.822a7.947,7.947,0,0,1,3.307-.853c1.777-.107,3.567.153,5.348,0a6.871,6.871,0,0,0,3.975-1.494A9.949,9.949,0,0,0,153.371,86.47ZM143.18,56.992a16.1,16.1,0,0,1,1.394,2.055,14.6,14.6,0,0,1,.672,1.327,14.768,14.768,0,0,0-.674-1.328A16.252,16.252,0,0,0,143.18,56.992Z" fill="#fff"/>
                    <Path id="Path_317" data-name="Path 317" d="M120.057,127.895l-6.871-24.152a2.141,2.141,0,0,0-2.059-1.555h-9.694a2.14,2.14,0,0,0-2.069,2.69l6.444,24.276a2.141,2.141,0,0,0,2.1,1.591l10.12-.124A2.141,2.141,0,0,0,120.057,127.895ZM110.225,107a1.56,1.56,0,1,1,1.56-1.56A1.56,1.56,0,0,1,110.225,107Z" fill="#f03349"/>
                    <Path id="Path_318" data-name="Path 318" d="M89.128,139.954c-.972,2.238-1.816,4.688-1.338,7.079.434,2.191,3.363,5.1,5.466,5.846a6.112,6.112,0,0,0,6.211-1.351,11.167,11.167,0,0,0,2.446-4.971q.723-2.5,1.354-5.028,1.2-4.793,2.056-9.66a13.52,13.52,0,0,0,6.366-8.143l3.808-.179a4.2,4.2,0,0,0,1.239-.183,1.515,1.515,0,0,0,.749-.542s.008,0,.008-.008a.628.628,0,0,0,.175-.387c.032-.47-.534-.721-.992-.824a28.086,28.086,0,0,0-3.537-.554,22.842,22.842,0,0,0,6.151-.92,2.209,2.209,0,0,0,.812-.367.813.813,0,0,0,.315-.792c-.108-.427-.605-.6-1.036-.69a32.617,32.617,0,0,0-8.222-.693,30.361,30.361,0,0,0,6.959-2.087c.439-.191.949-.514.9-.992-.056-.5-.677-.689-1.179-.741a15.837,15.837,0,0,0-9.031,1.828,46.539,46.539,0,0,0,6.162-3.9c.339-.255.717-.633.582-1.039-.143-.439-.745-.482-1.2-.423a21.283,21.283,0,0,0-12.115,5.805l-.2-.152q-.645-2.9-1.291-5.816a3.442,3.442,0,0,0-.446-1.239.192.192,0,0,0-.036-.044,1.131,1.131,0,0,0-1.095-.49c-.717.152-.916,1.06-.956,1.789a59.6,59.6,0,0,0,.9,15.478A143.643,143.643,0,0,0,89.128,139.954Z" fill="#fff"/>
                    <Path id="Path_319" data-name="Path 319" d="M106.244,116.917l2.8-1.961a.4.4,0,0,1,.545.143.407.407,0,0,1-.143.545l-2.8,1.961a.4.4,0,1,1-.4-.688Z" fill="#f03349"/>
                    <Path id="Path_320" data-name="Path 320" d="M108.038,118.388a11.846,11.846,0,0,1,3.679-1.175.412.412,0,0,1,.49.279.4.4,0,0,1-.278.49,11.157,11.157,0,0,0-3.488,1.094C107.984,119.307,107.581,118.62,108.038,118.388Z" fill="#f03349"/>
                    <Path id="Path_321" data-name="Path 321" d="M109.533,120.448l3.507.022a.4.4,0,0,1,0,.8l-3.507-.022A.4.4,0,0,1,109.533,120.448Z" fill="#f03349"/>
                    </G>
                    <G id="Group_1474" data-name="Group 1474">
                    <Path id="Path_322" data-name="Path 322" d="M61.324,65.321a3.342,3.342,0,0,1-.941-.184c-1.318-.469-2.334-1.637-3.7-1.915-1.562-.316-3.086.617-4.367,1.565S49.663,66.8,48.071,66.8a8.335,8.335,0,0,1-3.763-1.415,4.8,4.8,0,0,0-3.873-.692,4.3,4.3,0,0,0-2.244,2.846A21.6,21.6,0,0,1,37.044,71.1a3.427,3.427,0,0,1-2.329,1.849,2.644,2.644,0,0,0-2.59-1.344,3.32,3.32,0,0,0-2.2,1.316l-.363-.173a2.972,2.972,0,0,1,.346-4.655,5.66,5.66,0,0,1,5.363-9.631,7.04,7.04,0,0,1,8.868-8.954c2.23.739,4.187,2.6,6.531,2.434,1.456-.107,2.733-1,4.145-1.377a6.3,6.3,0,0,1,7.44,4.325,7.442,7.442,0,0,1,5.386-.873A5.771,5.771,0,0,1,71.7,57.534a4.727,4.727,0,0,1-1.268,5.1,4.012,4.012,0,0,1-5.119.005A4,4,0,0,1,61.324,65.321Z" fill="#fff"/>
                    <Path id="Path_323" data-name="Path 323" d="M50.9,95.135a12.9,12.9,0,0,1-13.059-5.608c-.255-.392-.922-.079-.664.319A13.66,13.66,0,0,0,51.04,95.859.369.369,0,0,0,50.9,95.135Z" fill="#fff"/>
                    <Path id="Path_324" data-name="Path 324" d="M47.766,88.565a3.175,3.175,0,0,1-3.022-3.771.371.371,0,0,0-.337-.4.376.376,0,0,0-.4.337,3.907,3.907,0,0,0,3.7,4.565C48.179,89.32,48.241,88.587,47.766,88.565Z" fill="#fff"/>
                    <Path id="Path_325" data-name="Path 325" d="M55.2,104.571a32.323,32.323,0,0,1,7.6-.977l.051.019c-.2.6-.4,1.2-.6,1.8a12.748,12.748,0,0,0-1.384-.239,1.526,1.526,0,0,0-1.4.337c-.464.579.058,1.423.621,1.9s1.271,1.034,1.174,1.768a1.765,1.765,0,0,0-2.707-.815,1.682,1.682,0,0,0-.456.613,1.916,1.916,0,0,0,.824,2.312,3.406,3.406,0,0,0-1.165-.157,1.638,1.638,0,0,0-1.49,1.009c-.292.91.529,1.764,1.27,2.371.706.578,1.413,1.152,2.119,1.731a43.444,43.444,0,0,1-8.675,7.4,11.163,11.163,0,0,1-3.88,4.788l-.07.05a19.606,19.606,0,0,0-7.631-6.209q1.413-2.439,2.957-4.793,1.69-2.6,3.546-5.085c.282-.387.572-.773.866-1.155a20.305,20.305,0,0,1,5.461-5.391c.14-.085.279-.162.422-.239A13.011,13.011,0,0,1,55.2,104.571Z" fill="#fff"/>
                    <Path id="Path_326" data-name="Path 326" d="M75.619,94.646l-8.928-.727A1.98,1.98,0,0,0,64.678,95.2l-8.137,21.728a1.978,1.978,0,0,0,1.667,2.663l9.311.872a1.977,1.977,0,0,0,2.049-1.308l7.755-21.874A1.978,1.978,0,0,0,75.619,94.646Zm-8.458,3.769A1.441,1.441,0,1,1,68.714,97.1,1.44,1.44,0,0,1,67.161,98.415Z" fill="#d2d5d5"/>
                    <Path id="Path_327" data-name="Path 327" d="M75.793,126.123a45.581,45.581,0,0,0-8.879,2.513,9.882,9.882,0,0,1-4.94-10.5q-1.164-.948-2.324-1.9c-.706-.579-1.413-1.153-2.119-1.731-.741-.607-1.562-1.461-1.27-2.371a1.638,1.638,0,0,1,1.49-1.009,3.406,3.406,0,0,1,1.165.157,1.916,1.916,0,0,1-.824-2.312,1.682,1.682,0,0,1,.456-.613c.85-.732,2.1-.475,1.533-.953s-1.085-1.322-.621-1.9a1.526,1.526,0,0,1,1.4-.337,12.748,12.748,0,0,1,1.384.239,13.708,13.708,0,0,1,4.039,1.6,23.732,23.732,0,0,1-2.475-3.252,1.952,1.952,0,0,1-.392-1.586.839.839,0,0,1,.137-.233c.4-.492,1.178-.355,1.773-.136a14.654,14.654,0,0,1,7.733,6.763c.642-1.9,1.52-3.628,2.162-5.525.3.165.3.3.427.625a4.082,4.082,0,0,1,.195,1.367q.125,4.387.128,8.778.015,6.067-.212,12.133Z" fill="#fff"/>
                    <G id="Group_1473" data-name="Group 1473">
                        <Path id="Path_328" data-name="Path 328" d="M87.542,139.572c-1.17-3.478-2.53-7.042-4.156-10.9A61.227,61.227,0,0,0,65,104.51c-.783-.618-1.308-1.036-1.569-1.248l.017-.116-8.1-3.209h0l-.89-.352h0l-.669-.265-.375-.15v0l-1.273-.5-.359-3a11.961,11.961,0,0,0,4.93-4.61,25.562,25.562,0,0,0,2.58-6.16c.19-.62.359-1.24.53-1.87.069-.27.14-.54.2-.81a4.182,4.182,0,0,1-1.06.16c-.061.25-.13.49-.2.73-.13.51-.27,1.01-.42,1.51a24.655,24.655,0,0,1-2.48,5.91,10.924,10.924,0,0,1-4.58,4.27,2.287,2.287,0,0,1-.23.1l-.35.14.386,3.216h0l.382,3.2a5.87,5.87,0,0,1-.463.774,7.387,7.387,0,0,1-6.962,3,12.245,12.245,0,0,1-5.1-1.84l-.055-.031c-.056-.032-.11-.069-.165-.1a31.962,31.962,0,0,1-3.778-2.7,46.229,46.229,0,0,1-4.08-3.8l.242-.9h0l3.71-13.907-.461-.15A6.877,6.877,0,0,1,29.777,77a4.823,4.823,0,0,1,.15-3.12,3.585,3.585,0,0,1,.39-.66,2.84,2.84,0,0,1,1.86-1.12,2.158,2.158,0,0,1,2.09,1.07l.17.32.35-.05a3.9,3.9,0,0,0,2.7-2.11,11.183,11.183,0,0,0,.85-2.45c.1-.4.2-.8.33-1.19a3.841,3.841,0,0,1,1.95-2.53c.88-.34,1.98-.13,3.46.66l.45.25a7.374,7.374,0,0,0,3.54,1.23h.01c1.69,0,3.13-1.07,4.39-2.01l.139-.11c1.2-.88,2.621-1.75,3.971-1.47a5.711,5.711,0,0,1,1.9.94,8.149,8.149,0,0,0,1.74.96,4.3,4.3,0,0,0,.62.16c.01.54.019,1.08.019,1.62,0,1.23-.039,2.46-.119,3.68-.01.26-.02.51-.05.76a3.7,3.7,0,0,1,.969.44q.047-.405.061-.81a60.826,60.826,0,0,0,.11-6.16l-.02-.46-.46-.02a2.774,2.774,0,0,1-.8-.16,7.912,7.912,0,0,1-1.52-.84,6.45,6.45,0,0,0-2.25-1.09c-1.75-.35-3.39.64-4.76,1.65l-.141.11c-1.2.89-2.439,1.81-3.8,1.81h-.01a6.694,6.694,0,0,1-3.06-1.1l-.46-.26c-1.11-.59-2.76-1.31-4.29-.71a4.749,4.749,0,0,0-2.54,3.15c-.13.41-.24.83-.35,1.25a10.27,10.27,0,0,1-.761,2.23,3.1,3.1,0,0,1-1.649,1.51,3.217,3.217,0,0,0-2.89-1.27,3.886,3.886,0,0,0-2.54,1.51,4.2,4.2,0,0,0-.51.86,5.815,5.815,0,0,0-.21,3.78,7.949,7.949,0,0,0,4.8,5.33L30.09,95.774c-.676.489-1.408.969-2.178,1.427l-.009.006c-.844.5-1.744.991-2.754,1.489l-.455.157.022.047c-1.525.743-3.1,1.439-4.642,2.106-1.413.615-2.874,1.249-4.286,1.925-6.235,2.98-10.216,6.451-12.171,10.612C.8,119.526,2.3,126.775,3.393,132.068l3.883,18.807c.527,2.564,1.182,5.756,3.275,7.991a8.312,8.312,0,0,0,2.1,1.615,264.985,264.985,0,0,0-5.672,33.771l.994.1a264.314,264.314,0,0,1,5.74-34.023l.093-.39-.36-.176a7.307,7.307,0,0,1-2.168-1.583c-1.9-2.029-2.525-5.067-3.027-7.51L4.372,131.865c-1.379-6.683-2.321-12.643.149-17.9,1.854-3.944,5.68-7.26,11.7-10.136,1.4-.668,2.849-1.3,4.253-1.909,1.515-.657,3.07-1.344,4.583-2.078a28.91,28.91,0,0,0,11.239,15.771,11.637,11.637,0,0,0,5.856,2.331l.05.038.185-.013c5.92-.407,9.371-2.057,10.537-5.041l.12-.207c2.119-4.43,3.223-8.225,3.314-11.314l6.324,2.506c.266.243.769.64,1.7,1.378a60.2,60.2,0,0,1,18.082,23.768c.5,1.18.963,2.325,1.412,3.455a44.545,44.545,0,0,0-6.293-6.783.45.45,0,0,0-.457-.1h-.008l-.02,0A30.692,30.692,0,0,0,66.177,128.7a.49.49,0,0,0-.285.454.505.505,0,0,0-.059.328,83,83,0,0,0,4.535,17.237c.009.026.031.037.044.059l.019.42a469.614,469.614,0,0,1-.512,52.2l1,.066a471.076,471.076,0,0,0,.609-50.118,11.393,11.393,0,0,0,5.791,4.941,8.723,8.723,0,0,0,11.361-6.562C89.229,144.956,88.419,142.179,87.542,139.572ZM29.868,97.148l.069.076c.289.317,6.48,7.066,12.249,8.663.208.057.417.127.624.17.048.01.094.011.142.021a8.481,8.481,0,0,0,1.03.146H44c.266.02.522.03.779.03.074,0,.14-.009.214-.011.133,0,.259-.011.388-.019.224-.013.444-.028.655-.055.12-.015.236-.034.352-.053.2-.033.4-.07.6-.115.109-.026.215-.054.321-.083.185-.051.365-.1.539-.165.1-.035.2-.071.295-.109.165-.064.324-.131.478-.2.093-.043.184-.087.273-.133.145-.074.283-.15.418-.229.085-.05.17-.1.252-.153.125-.08.243-.161.359-.245.079-.056.157-.112.232-.17.106-.083.206-.165.3-.249.071-.061.143-.122.211-.183.088-.081.17-.162.251-.243.065-.065.131-.129.192-.194s.136-.15.2-.225.117-.133.171-.2.105-.134.156-.2.1-.135.152-.2.075-.108.111-.162.094-.135.133-.2c.025-.039.044-.071.067-.108.043-.07.086-.139.12-.2l.012-.023c.14-.246.21-.407.214-.416l.05-.12h0l-.078-.649L52.282,99.8l1.229.488c0,.034,0,.067,0,.1a8.475,8.475,0,0,1-.022,1.127c0,.054-.012.108-.018.162a8.633,8.633,0,0,1-.2,1.139c-.008.034-.02.067-.028.1a8.707,8.707,0,0,1-.373,1.135l-.011.028a8.5,8.5,0,0,1-.539,1.07c-.016.028-.031.057-.048.085-.107.059-.211.119-.314.181a20.557,20.557,0,0,0-5.517,5.406c-.05.011-.1.029-.148.039-3.577.687-7.7-1.527-9.976-3.429-.181-.159-.366-.31-.543-.477q-.549-.516-1.062-1.06c-.1-.1-.193-.216-.291-.322-.239-.26-.478-.52-.708-.788-.115-.136-.225-.275-.339-.413-.2-.245-.407-.49-.6-.741-.119-.151-.233-.306-.349-.46-.183-.241-.367-.481-.544-.726-.117-.162-.231-.327-.346-.49-.17-.24-.34-.48-.5-.723-.115-.168-.226-.337-.338-.505-.16-.242-.321-.484-.478-.727-.108-.168-.214-.335-.32-.5-.158-.249-.317-.5-.471-.746-.1-.159-.2-.317-.294-.476s-.193-.314-.288-.471C29.2,97.588,29.538,97.369,29.868,97.148ZM51.286,107.1a8.439,8.439,0,0,1-3.019,3.03A19.434,19.434,0,0,1,51.286,107.1Zm3.425-1.609a38.818,38.818,0,0,1-2.422,6.484l-.089-.012-.132.39c-.912,2.69-4.042,4.2-9.567,4.606l-.166-.008a10.161,10.161,0,0,1-5.472-2.16,27.894,27.894,0,0,1-10.9-15.387c.722-.364,1.39-.724,2.026-1.091.053.088.109.177.163.265.156.254.312.508.472.763.125.2.253.4.381.6s.268.424.406.637.287.437.433.656c.13.2.259.393.392.588.155.228.315.453.474.679.13.185.259.371.393.556.167.23.341.457.514.685.133.175.263.352.4.526.184.235.377.464.567.694.133.162.263.327.4.486.214.25.439.492.662.736.122.134.238.271.363.4q.528.556,1.09,1.087c.168.158.365.329.575.5a17.914,17.914,0,0,0,10.184,4.7l.279.023.165-.226c.241-.33.489-.659.74-.987,2.516-.676,4.517-2.551,5.937-5.615l.054-.128.114-.1v-.109c.017-.028.028-.059.044-.087a9.618,9.618,0,0,0,.527-1.031c.014-.032.031-.063.044-.1a9.5,9.5,0,0,0,.388-1.112c.02-.07.04-.139.059-.21a9.687,9.687,0,0,0,.228-1.129c.009-.064.014-.128.022-.192a9.658,9.658,0,0,0,.072-1.177l0-.022.834.329a16.025,16.025,0,0,1-.836,4.4ZM87.7,147.525a7.723,7.723,0,0,1-10.06,5.808,10.581,10.581,0,0,1-5.484-4.888c-.269-.461-.521-.946-.77-1.486l-.105-.227a.507.507,0,0,0,.032-.443,81.8,81.8,0,0,1-4.425-16.784,29.891,29.891,0,0,1,10.205-2.826,43.253,43.253,0,0,1,7.162,8.108.441.441,0,0,0,.568.158c.637,1.68,1.228,3.324,1.774,4.945C87.428,142.37,88.2,145,87.7,147.525Z" fill="#fff"/>
                        <Path id="Path_329" data-name="Path 329" d="M38.236,121.355a.209.209,0,0,0-.06-.006.483.483,0,0,0-.587.041L23.372,133.437l-2.149-9.149a.5.5,0,0,0-.348-.377.567.567,0,0,0-.538.12.473.473,0,0,0-.129.463l2.276,9.694-3.609,3.059a.481.481,0,0,0-.182.373.554.554,0,0,0,.453.535.471.471,0,0,0,.074.006.5.5,0,0,0,.324-.125q7.3-6.182,14.595-12.366l3.906-3.308a.463.463,0,0,0,.069.019,13.215,13.215,0,0,1,9.668,8.839A118.86,118.86,0,0,1,37.13,145.27q-2.994,3.39-6.245,6.542a73,73,0,0,1-6.7,5.953c-2.665,2.013-5.953,3.555-9.359,2.813-.461-.1-.516.634-.059.734a11.378,11.378,0,0,0,8.421-1.958,49.279,49.279,0,0,0,6.993-5.853,119.032,119.032,0,0,0,12.34-13.591q3.12-4.017,5.881-8.295a.63.63,0,0,0,.086-.01.449.449,0,0,0,.313-.584A14.222,14.222,0,0,0,38.236,121.355Z" fill="#fff"/>
                    </G>
                    <Path id="Path_330" data-name="Path 330" d="M65.213,116.206l-5.1-4.592a.372.372,0,0,0-.513.091.378.378,0,0,0,.091.513l5.1,4.591a.371.371,0,0,0,.513-.091A.377.377,0,0,0,65.213,116.206Z" fill="#d2d5d5"/>
                    <Path id="Path_331" data-name="Path 331" d="M67.557,113.618a45.647,45.647,0,0,0-6.311-5.867c-.377-.289-.8.316-.422.6A44.61,44.61,0,0,1,67,114.1C67.311,114.448,67.873,113.973,67.557,113.618Z" fill="#d2d5d5"/>
                    <Path id="Path_332" data-name="Path 332" d="M70.213,110.471a12.935,12.935,0,0,0-3.523-3.549c-.393-.266-.815.337-.422.6a12.413,12.413,0,0,1,3.384,3.422.37.37,0,0,0,.519.042A.377.377,0,0,0,70.213,110.471Z" fill="#d2d5d5"/>
                    <Path id="Path_333" data-name="Path 333" d="M61.717,71.464a4.2,4.2,0,0,0-.98-.39c-.02-.01-.05-.01-.07-.02-2.93-.73-5.98,1.34-6.8,4.63-.011.03-.011.06-.02.09-.611-.131-1.229-.262-1.841-.385a6.548,6.548,0,0,0-.589-4.182A5.173,5.173,0,0,0,43.74,69.28,6.568,6.568,0,0,0,41.205,72.8a67.436,67.436,0,0,0-7.224-1.618c-.218-.036-.438-.074-.658-.112a20.8,20.8,0,0,0-3-.372,1.931,1.931,0,0,0-2.159,1.449.428.428,0,0,0,.359.518.522.522,0,0,0,.622-.414c.135-.725,1.175-.626,2.141-.471.1.016.2.031.28.042,1.059.136,2.136.3,3.2.493,2.051.369,4.141.858,6.218,1.446a6.543,6.543,0,0,0,.6,4.1,5.273,5.273,0,0,0,3.391,2.75,5.042,5.042,0,0,0,1.231.152,5.418,5.418,0,0,0,3.055-.975A6.6,6.6,0,0,0,51.854,76.1l1.863.384a5.727,5.727,0,0,0,3.96,6.48,4.52,4.52,0,0,0,1.09.14,4.7,4.7,0,0,0,1.06-.08,6.2,6.2,0,0,0,4.64-4.68A6.007,6.007,0,0,0,61.717,71.464Zm-10.748,4.19c-.708,2.822-3.29,4.61-5.753,4s-3.89-3.418-3.182-6.241a5.174,5.174,0,0,1,4.766-4.12,4.072,4.072,0,0,1,.987.122A4.3,4.3,0,0,1,50.563,71.7,5.65,5.65,0,0,1,50.969,75.654Zm12.788,2.51a5.512,5.512,0,0,1-3.73,4.05,4.265,4.265,0,0,1-2.171.04c-2.529-.64-4-3.51-3.279-6.4s3.38-4.72,5.91-4.08c.07.02.139.04.2.06a3.7,3.7,0,0,1,.969.44A5.332,5.332,0,0,1,63.757,78.164Z" fill="#f03349"/>
                    </G>
                    <G id="Group_1476" data-name="Group 1476">
                    <Path id="Path_334" data-name="Path 334" d="M252.273,93.041c-1.776-.92-4.383-.827-5.159-2.671-.95-2.259,2.128-4.79,1.128-7.024-.908-2.03-4.294-1.754-5.325-3.726-1.114-2.127,1.539-4.743.67-6.981-.729-1.878-3.281-2.094-4.887-3.307-2.573-1.937-2.183-5.79-2.472-9a15.487,15.487,0,0,0-.525-2.857,2.957,2.957,0,0,0,1.92-2.484,2.263,2.263,0,0,0,1.98-.144,3.763,3.763,0,0,0,1.4-1.467,5.753,5.753,0,0,0-5.087-8.613,10.973,10.973,0,0,0-1.785.216L232.3,45.3a6.355,6.355,0,0,0-1.721.47,3.243,3.243,0,0,0-1.674,2.213c-.42-.284-.857-.547-1.306-.793a16.941,16.941,0,0,0-15.722-.076,16.088,16.088,0,0,0-2.459,1.615,2.441,2.441,0,0,0,.017-1.725,2.546,2.546,0,0,0-3.018-1.467c-1.111.339-1.925,1.441-3.082,1.569a11.034,11.034,0,0,1-2.2-.327,3.917,3.917,0,0,0-3.748,2.709,8.5,8.5,0,0,0,.018,4.9,5.065,5.065,0,0,0,.779,1.9,2.053,2.053,0,0,0,1.772.882c.666-.072,1.348-.568,1.95-.263.327.165.505.522.763.784a1.472,1.472,0,0,0,.8.411,15.347,15.347,0,0,0-.347,2.065c-.289,2.9-.115,6.435-2.59,7.956-1.425.878-3.421.789-4.506,2.056-1.149,1.34-.628,3.366-.115,5.053s.835,3.811-.509,4.947c-1.759,1.484-5.074.072-6.392,1.954-1.161,1.662.619,3.858.509,5.88a6.113,6.113,0,0,1-1.882,3.488,7.2,7.2,0,0,0-2.069,3.408c-.2,1.289.687,2.832,1.963,2.832l.411.7A29.458,29.458,0,0,1,192,96.534a65.043,65.043,0,0,1,12.95-3.031c-.008.3-.017.6-.025.894q2.193-.591,4.383-1.186.343-1.68.678-3.362c-2.73-2.887-4.268-7.071-5.133-10.9a6.767,6.767,0,0,1-4.421-4.659,4.263,4.263,0,0,1-.055-2.179,2.47,2.47,0,0,1,1.356-1.64,1.749,1.749,0,0,1,2.005.445h.034c0,.042.008.084.008.127,1.348-2.717,4.07-4.5,6.855-5.727,2.814-1.238,5.82-2.047,8.495-3.561,2.522-1.424,4.794-3.658,5.434-6.447l.1.021c8.435,1.386,7.85,13.022,7.85,13.022s.017.7-.021,1.869a1.838,1.838,0,0,1,1.437-.012,2.469,2.469,0,0,1,1.357,1.644,4.247,4.247,0,0,1-.056,2.175,6.808,6.808,0,0,1-3.658,4.366c-.8,4.027-2.276,8.414-4.993,11.407.233,1.162.47,2.319.7,3.476,1.463.394,2.921.793,4.383,1.187-.008-.3-.017-.6-.025-.894a65.043,65.043,0,0,1,12.95,3.031,26.525,26.525,0,0,1,7.55,4.306,4.383,4.383,0,0,0,.131-7.863Z" fill="#fff"/>
                    <Path id="Path_335" data-name="Path 335" d="M212.374,45.355c-.921-.572-1.843.278-2.417.93a9.449,9.449,0,0,0-2.328,6.246c-.1.041-.2.082-.306.115-1.065.336-2.2.368-3.262.723a3.492,3.492,0,0,0-2.226,1.757,1.439,1.439,0,0,0,1.046,2.034c1.064.192,2.229-.639,3.035-1.24a10.335,10.335,0,0,0,2.433-2.586.491.491,0,0,0,.049-.1.348.348,0,0,0,.063-.148c.118-.06.234-.124.348-.2a9.753,9.753,0,0,0,3.946-5.115C212.984,47.009,213.192,45.862,212.374,45.355Zm-7.158,10.029a8.373,8.373,0,0,1-1.308.762,1.542,1.542,0,0,1-.857.181.606.606,0,0,1-.419-.922c.453-.993,1.8-1.311,2.766-1.5.583-.112,1.169-.2,1.738-.344A9.056,9.056,0,0,1,205.216,55.384Zm6.7-7.753a8.139,8.139,0,0,1-1.742,2.907,8.928,8.928,0,0,1-1.69,1.543,8.542,8.542,0,0,1,2.075-5.2c.263-.3.943-1.161,1.408-.782C212.336,46.406,212.022,47.284,211.913,47.631Z" fill="#f03349"/>
                    <Path id="Path_336" data-name="Path 336" d="M236.312,52.489a4.907,4.907,0,0,0-3.421-.6,10.377,10.377,0,0,0-.372-4.708c-.409-1.261-1.236-3.005-2.861-2.718-1.585.279-1.515,2.185-.923,3.283.433.8,1,1.544,1.5,2.3l1.752,2.63a.515.515,0,0,0,.219.18,8.584,8.584,0,0,0,2.457,3.284,2.937,2.937,0,0,0,1.921.819A1.643,1.643,0,0,0,238,55.894C238.548,54.52,237.432,53.158,236.312,52.489Zm-7.072-5.683c-.161-.507-.122-1.293.483-1.484,1.324-.42,1.945,1.863,2.162,2.73a9.461,9.461,0,0,1,.226,3.284l-1.842-2.764A7.487,7.487,0,0,1,229.24,46.806Zm8.036,8.582c-.321,1.528-1.986.232-2.577-.344a7.787,7.787,0,0,1-1.623-2.322,4.023,4.023,0,0,1,2.4.281C236.315,53.385,237.5,54.327,237.276,55.388Z" fill="#f03349"/>
                    <Path id="Path_337" data-name="Path 337" d="M233.058,172.242q-7.332.21-14.659.415l-.2-.068q-7.344-.2-14.675-.411c-.3-11.619-.967-39.9.818-54.949q.179-7.065.364-14.129a33.7,33.7,0,0,0,27.185.068q.153,5.97.309,11.941C233.494,129.17,233.388,159.919,233.058,172.242Z" fill="#fff"/>
                    <Path id="Path_338" data-name="Path 338" d="M242.075,194.617A39.637,39.637,0,0,1,232,193.327l-.481-.127.179-.694c.365-6.172.653-12.843.843-19.75l-14.219.4-.213-.072-14.071-.394c.182,6.6.475,13.253.871,19.794l.172.643-.485.128a39.991,39.991,0,0,1-16.954.7l.172-.984A39.049,39.049,0,0,0,203.9,192.4c-.4-6.681-.7-13.481-.879-20.213l-.014-.528,15.463.491,15.1-.428-.014.528c-.188,7.036-.479,13.836-.863,20.217a39.115,39.115,0,0,0,16.084.57l.172.984A40.255,40.255,0,0,1,242.075,194.617Z" fill="#fff"/>
                    <Path id="Path_339" data-name="Path 339" d="M220.932,105.97H213.88a5.224,5.224,0,0,0-5.224,5.223v19.926a5.224,5.224,0,0,0,5.224,5.223h7.052a5.224,5.224,0,0,0,5.224-5.223V111.193A5.224,5.224,0,0,0,220.932,105.97Zm-8.569,3.972a1.147,1.147,0,1,1,1.147-1.147A1.147,1.147,0,0,1,212.363,109.942Z" fill="#d2d5d5"/>
                    <Path id="Path_340" data-name="Path 340" d="M232.2,115.109a16.513,16.513,0,0,1,2.523,3.391c2.407,3.938,5.509,8.511,7.594,12.635-2.255,1.505-5.052,3.175-6.807,5.244a13.311,13.311,0,0,1-2.466-.711,12.132,12.132,0,0,1-7.02-4.769,22.14,22.14,0,0,1-7.465-.61,2.505,2.505,0,0,1-.6.64,5.388,5.388,0,0,1-1.543.75,20.2,20.2,0,0,1-6.677,1.094,13.7,13.7,0,0,1-6.112,4.536,13.043,13.043,0,0,1-2.972.741,31.529,31.529,0,0,0-4.569-8.872,25.927,25.927,0,0,1,8.253-11.949,24.83,24.83,0,0,1,4.608-2.98c-.051.6-.106,1.195-.161,1.793a25.9,25.9,0,0,1,7.613-1.475,3.109,3.109,0,0,1-.907-.641,1.268,1.268,0,0,1-.3-1.322c.314-.7,1.276-.742,2.043-.674q3.726.324,7.456.665c2.294.212,4.7.462,6.6,1.772A8.1,8.1,0,0,1,232.2,115.109Z" fill="#fff"/>
                    <G id="Group_1475" data-name="Group 1475">
                        <Path id="Path_341" data-name="Path 341" d="M191.826,96.066a30.022,30.022,0,0,0-4.139,1.941,21.169,21.169,0,0,0-7.248,6.51c-2.407,3.6-3.393,7.942-4.1,12.1a123.075,123.075,0,0,0-1.464,28.85c.235,3.467.8,6.978,3.3,9.171a8.47,8.47,0,0,0,7.253,1.675,12.347,12.347,0,0,0,3.386-1.258,356.216,356.216,0,0,0-7.126,36.959l-.058.412.4.131a38.358,38.358,0,0,0,5.62,1.4,40.076,40.076,0,0,0,6.87.59,39.541,39.541,0,0,0,10.084-1.294l.485-.128-.172-.643c-.407-6.716-.7-13.553-.886-20.321-.309-11.722.45-43.6.818-54.924.117-4.686.24-9.37.365-14.129l.263-10.2-.6.094A64.9,64.9,0,0,0,191.826,96.066Zm12.38,7.094q-.185,7.029-.363,14.052c-.368,11.329-1.127,43.238-.818,54.98.181,6.732.476,13.532.879,20.213a39,39,0,0,1-16.09.572,37.521,37.521,0,0,1-5.08-1.238,355.6,355.6,0,0,1,7.338-37.6l.04-.161a.417.417,0,0,0,.159-.1,58.763,58.763,0,0,0,10.9-15.231.439.439,0,0,0,.037-.136.353.353,0,0,0,0-.27,41.6,41.6,0,0,0-5.792-10.435.414.414,0,0,0-.616-.287c-.443.259-.877.533-1.316.8q1.008-5.085,2.014-10.17c.106-.533-.712-.761-.817-.226l-2.171,10.961c0,.01,0,.017,0,.027a91.231,91.231,0,0,0-7.776,5.419c-2.769,2.157-5.391,4.626-6.754,7.93-.208.5.612.723.817.225,1.326-3.212,4.009-5.6,6.7-7.683a91.884,91.884,0,0,1,9.364-6.327,40.86,40.86,0,0,1,5.494,9.9,58.039,58.039,0,0,1-10.689,14.9.428.428,0,0,0-.1.157l-.254.164a12.036,12.036,0,0,1-4.09,1.736,7.451,7.451,0,0,1-6.394-1.446c-2.229-1.954-2.74-5.233-2.96-8.486a122.049,122.049,0,0,1,1.453-28.615c.687-4.05,1.641-8.272,3.944-11.713a20.175,20.175,0,0,1,6.911-6.2,28.986,28.986,0,0,1,4-1.875,61.633,61.633,0,0,1,12.256-2.909Z" fill="#fff"/>
                        <Path id="Path_342" data-name="Path 342" d="M260.26,116.682c-.707-4.155-1.693-8.5-4.1-12.1a19.282,19.282,0,0,0-3.7-4.06,26.885,26.885,0,0,0-7.691-4.392,64.983,64.983,0,0,0-13.049-3.056l-.595-.1.041,1.5q.091,3.687.19,7.372l.035,1.334q.153,5.972.31,11.944c.35,11.685,1.188,44.722.856,57.1-.188,7.065-.482,13.92-.858,20.278l-.179.694.481.127a39.637,39.637,0,0,0,10.073,1.29,40.235,40.235,0,0,0,6.875-.591,39.189,39.189,0,0,0,5.626-1.407l.393-.131-.056-.412a357.01,357.01,0,0,0-7.124-36.951,12.243,12.243,0,0,0,3.379,1.257,8.464,8.464,0,0,0,7.254-1.677c2.5-2.186,3.064-5.7,3.3-9.173A123.078,123.078,0,0,0,260.26,116.682Zm.462,28.783c-.22,3.257-.729,6.54-2.958,8.487a7.468,7.468,0,0,1-6.4,1.45,11.953,11.953,0,0,1-4.084-1.739l-.563-.364a76.353,76.353,0,0,1-11.073-16.214,28.906,28.906,0,0,1,7.721-6.171,49.085,49.085,0,0,1,10.583,7.073c.409.359,1.011-.238.6-.6a50.442,50.442,0,0,0-4.888-3.776,55.449,55.449,0,0,0-2.4-16.115c-.158-.52-.977-.3-.817.225a54.666,54.666,0,0,1,2.357,15.322,49.56,49.56,0,0,0-5.041-2.879.437.437,0,0,0-.189-.046.4.4,0,0,0-.456-.039,29.539,29.539,0,0,0-8.245,6.6.424.424,0,0,0,0,.564.409.409,0,0,0,.037.261,77.139,77.139,0,0,0,11.669,16.917,356.007,356.007,0,0,1,7.285,37.379,38.253,38.253,0,0,1-5.086,1.244,39.115,39.115,0,0,1-16.084-.57c.386-6.409.676-13.21.863-20.217.332-12.4-.506-45.468-.856-57.16q-.16-5.969-.31-11.94l-.035-1.335q-.1-3.686-.19-7.373l-.008-.291a61.606,61.606,0,0,1,12.255,2.908,25.887,25.887,0,0,1,7.407,4.225,18.37,18.37,0,0,1,3.5,3.848c2.306,3.447,3.26,7.667,3.949,11.713A122.051,122.051,0,0,1,260.722,145.465Z" fill="#fff"/>
                    </G>
                    <Path id="Path_343" data-name="Path 343" d="M213.741,119.037l9.054-.389c.633-.027.636-1.015,0-.987l-6.9.3q1.47-.6,2.938-1.193a2.491,2.491,0,0,0,1.307-.875,1.173,1.173,0,0,0-.046-1.336,1.581,1.581,0,0,0-1.313-.445c-.821,0-1.643.047-2.463.07a.494.494,0,0,0,0,.987l1.724-.049c.214-.006,1.424-.2,1.245.274-.143.382-1.153.6-1.5.74l-1.676.681-6.371,2.588a.494.494,0,0,0,.262.952,34.977,34.977,0,0,1,5.312-.358q1.307.012,2.609.12.71.059,1.417.147c.284.035.859.045,1.078.265.59.594-1.8.981-2.1,1.051l-2.616.61-5.351,1.248a.5.5,0,0,0,.131.97,28.561,28.561,0,0,1,5.144.311q1.251.2,2.481.5a9.794,9.794,0,0,1,2.51.761c.549.323.123.426-.251.479-.444.062-.9.082-1.344.123l-2.689.247-5.5.505c-.507.047-.723.876-.131.97a19.53,19.53,0,0,1,7.459,2.237c.54.337,1.037-.517.5-.852a12.648,12.648,0,0,0-2.728-1.25,26.547,26.547,0,0,1,6.294.642c.618.14.883-.812.262-.952a28.153,28.153,0,0,0-3.313-.538,11.008,11.008,0,0,0,1.639-.208,1.183,1.183,0,0,0,1.05-1.4c-.226-.843-1.221-1.063-1.941-1.284a28.692,28.692,0,0,0-3.126-.772c-.14-.026-.282-.044-.422-.068a39.558,39.558,0,0,1,6.05-.2c.635.028.633-.959,0-.987a39.865,39.865,0,0,0-4.79.095,20.158,20.158,0,0,0,2.808-.689,1.422,1.422,0,0,0,1.018-1.795c-.3-.714-1.137-.869-1.818-.959q-1.623-.214-3.259-.28c-1.068-.042-2.136-.029-3.2.028l.274-.112A.436.436,0,0,0,213.741,119.037Z" fill="#d2d5d5"/>
                    <Path id="Path_344" data-name="Path 344" d="M216.149,85.124a3.454,3.454,0,0,0,2.67.967,3.4,3.4,0,0,0,2.48-1.449.4.4,0,0,1,.533-.147.4.4,0,0,1,.148.534,4.152,4.152,0,0,1-6.385.649C215.234,85.326,215.788,84.772,216.149,85.124Z" fill="#fff"/>
                    </G>
                </G>
                </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    onboardingImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});