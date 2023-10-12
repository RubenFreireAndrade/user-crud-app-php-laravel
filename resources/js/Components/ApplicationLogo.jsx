export default function ApplicationLogo(props) {
    return (
        // <svg {...props} viewBox="0 0 316 316" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M25.7 3.7L25.7 3.7Q25.6 3.75 25.5 3.75 25.4 3.75 25.1 3.75L25.1 3.75Q24.4 3.75 23.48 3.53 22.55 3.3 21.68 2.98 20.8 2.65 20.18 2.25 19.55 1.85 19.4 1.55L19.4 1.55Q19.35 0.85 19.35 0.1 19.35-0.65 19.35-1.35L19.35-1.35Q19.35-6.95 20.18-13.05 21-19.15 22.9-26.25L22.9-26.25Q23.1-26.95 23.33-28.03 23.55-29.1 23.8-30.35L23.8-30.35Q22.6-29.4 20.95-27.33 19.3-25.25 17.48-22.43 15.65-19.6 13.83-16.23 12-12.85 10.5-9.38 9-5.9 7.93-2.5 6.85 0.9 6.6 3.8L6.6 3.8Q4.2 3.1 3.28 2.4 2.35 1.7 2.35 0.7L2.35 0.7Q2.35-0.2 2.9-1.85 3.45-3.5 4.45-5.75 5.45-8 6.9-10.78 8.35-13.55 10.1-16.75L10.1-16.75Q12.1-20.4 14.03-23.6 15.95-26.8 17.8-29.4 19.65-32 21.43-33.9 23.2-35.8 24.95-36.8L24.95-36.8Q25.65-36.8 26.83-36.45 28-36.1 29.13-35.6 30.25-35.1 31.13-34.58 32-34.05 32.1-33.7L32.1-33.7Q31.4-32.3 30.45-29.5 29.5-26.7 28.53-23.15 27.55-19.6 26.68-15.63 25.8-11.65 25.3-8L25.3-8Q26.45-10.75 27.98-13.73 29.5-16.7 31.2-19.63 32.9-22.55 34.68-25.3 36.45-28.05 38.15-30.33 39.85-32.6 41.33-34.3 42.8-36 43.95-36.8L43.95-36.8Q44.65-36.8 45.83-36.45 47-36.1 48.13-35.6 49.25-35.1 50.13-34.58 51-34.05 51.1-33.7L51.1-33.7Q49.5-30.85 48.3-26.75 47.1-22.65 46.28-18.15 45.45-13.65 45.03-9.22 44.6-4.8 44.6-1.3L44.6-1.3Q44.6-0.15 44.6 1.1 44.6 2.35 44.7 3.7L44.7 3.7Q44 3.7 43.03 3.53 42.05 3.35 41.13 3.05 40.2 2.75 39.45 2.38 38.7 2 38.4 1.55L38.4 1.55Q38.35 0.85 38.35 0.1 38.35-0.65 38.35-1.35L38.35-1.35Q38.35-6.95 39.18-13.05 40-19.15 41.9-26.25L41.9-26.25Q42.1-26.95 42.35-28.15 42.6-29.35 42.85-30.65L42.85-30.65Q41.45-29.95 39.68-27.98 37.9-26 36.08-23.18 34.25-20.35 32.48-16.9 30.7-13.45 29.28-9.88 27.85-6.3 26.88-2.78 25.9 0.75 25.7 3.7ZM72.8 3.7L72.8 3.7Q72.7 3.75 72.6 3.75 72.5 3.75 72.2 3.75L72.2 3.75Q71.5 3.75 70.57 3.53 69.65 3.3 68.77 2.98 67.9 2.65 67.27 2.25 66.65 1.85 66.5 1.55L66.5 1.55Q66.45 0.85 66.45 0.1 66.45-0.65 66.45-1.35L66.45-1.35Q66.45-6.95 67.27-13.05 68.1-19.15 70-26.25L70-26.25Q70.2-26.95 70.42-28.03 70.65-29.1 70.9-30.35L70.9-30.35Q69.7-29.4 68.05-27.33 66.4-25.25 64.57-22.43 62.75-19.6 60.92-16.23 59.1-12.85 57.6-9.38 56.1-5.9 55.02-2.5 53.95 0.9 53.7 3.8L53.7 3.8Q51.3 3.1 50.37 2.4 49.45 1.7 49.45 0.7L49.45 0.7Q49.45-0.2 50-1.85 50.55-3.5 51.55-5.75 52.55-8 54-10.78 55.45-13.55 57.2-16.75L57.2-16.75Q59.2-20.4 61.12-23.6 63.05-26.8 64.9-29.4 66.75-32 68.52-33.9 70.3-35.8 72.05-36.8L72.05-36.8Q72.75-36.8 73.92-36.45 75.1-36.1 76.22-35.6 77.35-35.1 78.22-34.58 79.1-34.05 79.2-33.7L79.2-33.7Q78.5-32.3 77.55-29.5 76.6-26.7 75.62-23.15 74.65-19.6 73.77-15.63 72.9-11.65 72.4-8L72.4-8Q73.55-10.75 75.07-13.73 76.6-16.7 78.3-19.63 80-22.55 81.77-25.3 83.55-28.05 85.25-30.33 86.95-32.6 88.42-34.3 89.9-36 91.05-36.8L91.05-36.8Q91.75-36.8 92.92-36.45 94.1-36.1 95.22-35.6 96.35-35.1 97.22-34.58 98.1-34.05 98.2-33.7L98.2-33.7Q96.6-30.85 95.4-26.75 94.2-22.65 93.37-18.15 92.55-13.65 92.12-9.22 91.7-4.8 91.7-1.3L91.7-1.3Q91.7-0.15 91.7 1.1 91.7 2.35 91.8 3.7L91.8 3.7Q91.1 3.7 90.12 3.53 89.15 3.35 88.22 3.05 87.3 2.75 86.55 2.38 85.8 2 85.5 1.55L85.5 1.55Q85.45 0.85 85.45 0.1 85.45-0.65 85.45-1.35L85.45-1.35Q85.45-6.95 86.27-13.05 87.1-19.15 89-26.25L89-26.25Q89.2-26.95 89.45-28.15 89.7-29.35 89.95-30.65L89.95-30.65Q88.55-29.95 86.77-27.98 85-26 83.17-23.18 81.35-20.35 79.57-16.9 77.8-13.45 76.37-9.88 74.95-6.3 73.97-2.78 73 0.75 72.8 3.7Z" />
        // </svg>

        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="2000" height="1500" viewBox="0 0 2000 1500"><path fill="#1f2d5a" d="M0 0h2000v1500H0z"/><svg viewBox="0 0 396 247" data-background-color="#1f2d5a" height="1247" width="2000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" transform="matrix(.75 0 0 .75 249.09 282.754)"><svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52" transform="translate(.24 -.1)"><svg/><svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52"><svg viewBox="0 0 223.546 152.77" height="152.77" width="223.546" transform="translate(85.987 47.215)"><svg viewBox="0 0 223.546 152.77" height="152.77" width="223.546"><svg viewBox="0 0 244.431 167.042" height="152.77" width="223.546"><svg viewBox="0 0 244.431 167.042" height="167.042" width="244.431"><svg viewBox="0 0 244.431 167.042" height="167.042" width="244.431"><svg viewBox="0 0 244.431 103.536" height="103.536" width="244.431"><svg width="244.431" viewBox="2.35 -36.8 95.85 40.6" height="103.536" data-palette-color="#fbfbfb"><path d="M25.7 3.7q-.1.05-.2.05h-.4q-.7 0-1.62-.22-.93-.23-1.8-.55-.88-.33-1.5-.73-.63-.4-.78-.7-.05-.7-.05-1.45v-1.45q0-5.6.83-11.7.82-6.1 2.72-13.2.2-.7.43-1.78.22-1.07.47-2.32-1.2.95-2.85 3.02-1.65 2.08-3.47 4.9-1.83 2.83-3.65 6.2Q12-12.85 10.5-9.38 9-5.9 7.93-2.5 6.85.9 6.6 3.8q-2.4-.7-3.32-1.4-.93-.7-.93-1.7 0-.9.55-2.55t1.55-3.9q1-2.25 2.45-5.03 1.45-2.77 3.2-5.97 2-3.65 3.93-6.85 1.92-3.2 3.77-5.8 1.85-2.6 3.63-4.5 1.77-1.9 3.52-2.9.7 0 1.88.35 1.17.35 2.3.85 1.12.5 2 1.02.87.53.97.88-.7 1.4-1.65 4.2-.95 2.8-1.92 6.35-.98 3.55-1.85 7.52Q25.8-11.65 25.3-8q1.15-2.75 2.68-5.73 1.52-2.97 3.22-5.9 1.7-2.92 3.48-5.67 1.77-2.75 3.47-5.03 1.7-2.27 3.18-3.97 1.47-1.7 2.62-2.5.7 0 1.88.35 1.17.35 2.3.85 1.12.5 2 1.02.87.53.97.88-1.6 2.85-2.8 6.95-1.2 4.1-2.02 8.6-.83 4.5-1.25 8.93-.43 4.42-.43 7.92v2.4q0 1.25.1 2.6-.7 0-1.67-.17-.98-.18-1.9-.48-.93-.3-1.68-.67-.75-.38-1.05-.83-.05-.7-.05-1.45v-1.45q0-5.6.83-11.7.82-6.1 2.72-13.2.2-.7.45-1.9t.5-2.5q-1.4.7-3.17 2.67-1.78 1.98-3.6 4.8-1.83 2.83-3.6 6.28-1.78 3.45-3.2 7.02-1.43 3.58-2.4 7.1Q25.9.75 25.7 3.7Zm47.1 0q-.1.05-.2.05h-.4q-.7 0-1.63-.22-.92-.23-1.8-.55-.87-.33-1.5-.73-.62-.4-.77-.7-.05-.7-.05-1.45v-1.45q0-5.6.82-11.7.83-6.1 2.73-13.2.2-.7.42-1.78.23-1.07.48-2.32-1.2.95-2.85 3.02-1.65 2.08-3.48 4.9-1.82 2.83-3.65 6.2-1.82 3.38-3.32 6.85-1.5 3.48-2.58 6.88Q53.95.9 53.7 3.8q-2.4-.7-3.33-1.4-.92-.7-.92-1.7 0-.9.55-2.55t1.55-3.9q1-2.25 2.45-5.03 1.45-2.77 3.2-5.97 2-3.65 3.92-6.85 1.93-3.2 3.78-5.8 1.85-2.6 3.62-4.5 1.78-1.9 3.53-2.9.7 0 1.87.35 1.18.35 2.3.85 1.13.5 2 1.02.88.53.98.88-.7 1.4-1.65 4.2-.95 2.8-1.93 6.35-.97 3.55-1.85 7.52Q72.9-11.65 72.4-8q1.15-2.75 2.67-5.73 1.53-2.97 3.23-5.9 1.7-2.92 3.47-5.67 1.78-2.75 3.48-5.03 1.7-2.27 3.17-3.97 1.48-1.7 2.63-2.5.7 0 1.87.35 1.18.35 2.3.85 1.13.5 2 1.02.88.53.98.88-1.6 2.85-2.8 6.95-1.2 4.1-2.03 8.6-.82 4.5-1.25 8.93-.42 4.42-.42 7.92v2.4q0 1.25.1 2.6-.7 0-1.68-.17-.97-.18-1.9-.48-.92-.3-1.67-.67-.75-.38-1.05-.83-.05-.7-.05-1.45v-1.45q0-5.6.82-11.7.83-6.1 2.73-13.2.2-.7.45-1.9t.5-2.5q-1.4.7-3.18 2.67-1.77 1.98-3.6 4.8-1.82 2.83-3.6 6.28-1.77 3.45-3.2 7.02-1.42 3.58-2.4 7.1Q73 .75 72.8 3.7Z" fill="#fbfbfb" class="wordmark-text-0" data-fill-palette-color="primary"/></svg></svg><svg viewBox="0 0 244.431 39.064" height="39.064" width="244.431" transform="translate(0 127.978)"><svg width="244.431" viewBox="4.25 -35.9 294.37 47.05" height="39.064" data-palette-color="#fbfbfb"><path d="M8.1 0H4.25v-34.6h6.95L21-5.35l9.8-29.25h6.95V0H33.9v-30.5h-.7L23.15-1.25h-4.3L8.8-30.5h-.7V0Zm55.15-17.45v12.8q.15 1.85 2.9 2.2L66 .5q-3.95 0-5.95-2-4.5 2-9 2-3.45 0-5.25-1.95Q44-3.4 44-7.05q0-3.65 1.85-5.38 1.85-1.72 5.8-2.12l7.85-.75v-2.15q0-2.55-1.1-3.65t-3-1.1q-4 0-8.3.5l-1.55.15-.15-2.85q5.5-1.1 9.75-1.1t6.17 1.95q1.93 1.95 1.93 6.1Zm-15.4 10.2q0 4.6 3.8 4.6 3.4 0 6.7-1.15l1.15-.4v-8.25l-7.4.7q-2.25.2-3.25 1.3t-1 3.2ZM70.7-.65V-25h3.69V-.6q0 4.6-1.64 6.9-1.66 2.3-6.66 4.85l-1.5-2.9q3.91-2.25 5-3.83Q70.7 2.85 70.7-.65Zm3.69-30H70.7V-35h3.69v4.35ZM98.59-3.1l1.45-.15.1 2.95q-5.7.8-9.75.8-5.4 0-7.65-3.13-2.25-3.12-2.25-9.72 0-13.15 10.45-13.15 5.05 0 7.55 2.82 2.5 2.83 2.5 8.88l-.2 2.85h-16.5q0 4.15 1.5 6.15t5.23 2q3.72 0 7.57-.3ZM84.24-13.95h13q0-4.6-1.47-6.5-1.48-1.9-4.8-1.9-3.33 0-5 2-1.68 2-1.73 6.4Zm30.45-8.2q-5.45 0-5.45 3.8 0 1.75 1.25 2.47 1.25.73 5.7 1.5 4.45.78 6.3 2.18 1.85 1.4 1.85 5.25t-2.47 5.65Q119.39.5 114.64.5q-3.1 0-7.3-.7l-1.5-.25.2-3.25q5.7.85 8.6.85 2.9 0 4.43-.93 1.52-.92 1.52-3.1 0-2.17-1.3-2.95-1.3-.77-5.7-1.47t-6.25-2.05q-1.85-1.35-1.85-5t2.58-5.4q2.57-1.75 6.42-1.75 3.05 0 7.65.7l1.4.25-.1 3.2q-5.55-.8-8.75-.8ZM143.04-25v3.25h-7.95V-9.8q0 4.3.62 5.65.63 1.35 2.98 1.35l4.45-.3.25 3.1q-3.35.55-5.1.55-3.9 0-5.4-1.9-1.5-1.9-1.5-7.25v-13.15h-3.55V-25h3.55v-7.65h3.7V-25h7.95Zm8.35 25h-3.75v-25h3.75V0Zm0-30.65h-3.75V-35h3.75v4.35Zm16.54 5.15q1.65 0 5.6.6l1.2.15-.15 3.05q-4-.45-5.9-.45-4.25 0-5.77 2.02-1.53 2.03-1.53 7.5 0 5.48 1.43 7.63 1.42 2.15 5.92 2.15l5.9-.45.15 3.1q-4.65.7-6.95.7-5.85 0-8.07-3-2.23-3-2.23-10.13 0-7.12 2.4-10 2.4-2.87 8-2.87ZM195.88 0h-3.85v-34.6h6.95l9.8 29.25 9.8-29.25h6.95V0h-3.85v-30.5h-.7L210.93-1.25h-4.3L196.58-30.5h-.7V0Zm41.25 0h-3.75v-25h3.75V0Zm0-30.65h-3.75V-35h3.75v4.35ZM248.37 0h-3.75v-35.9h3.75V0Zm24.5-3.1 1.45-.15.1 2.95q-5.7.8-9.75.8-5.4 0-7.65-3.13-2.25-3.12-2.25-9.72 0-13.15 10.45-13.15 5.05 0 7.55 2.82 2.5 2.83 2.5 8.88l-.2 2.85h-16.5q0 4.15 1.5 6.15t5.23 2q3.72 0 7.57-.3Zm-14.35-10.85h13q0-4.6-1.47-6.5-1.48-1.9-4.8-1.9-3.33 0-5 2-1.68 2-1.73 6.4Zm30.45-8.2q-5.45 0-5.45 3.8 0 1.75 1.25 2.47 1.25.73 5.7 1.5 4.45.78 6.3 2.18 1.85 1.4 1.85 5.25t-2.48 5.65Q293.67.5 288.92.5q-3.1 0-7.3-.7l-1.5-.25.2-3.25q5.7.85 8.6.85 2.9 0 4.42-.93 1.53-.92 1.53-3.1 0-2.17-1.3-2.95-1.3-.77-5.7-1.47t-6.25-2.05q-1.85-1.35-1.85-5t2.57-5.4q2.58-1.75 6.43-1.75 3.05 0 7.65.7l1.4.25-.1 3.2q-5.55-.8-8.75-.8Z" fill="#fbfbfb" class="slogan-text-1" data-fill-palette-color="secondary"/></svg></svg></svg></svg></svg></svg></svg><path d="M235.373 0c68.262 0 123.6 55.338 123.6 123.6s-55.338 123.6-123.6 123.6c-34.048 0-64.881-13.767-87.235-36.038h6.162c21.285 19.717 49.771 31.769 81.073 31.768 65.904 0 119.33-53.426 119.33-119.33S301.277 4.27 235.373 4.27c-31.302 0-59.788 12.052-81.073 31.768h-6.162C170.492 13.767 201.325 0 235.373 0z" fill="#fbfbfb" stroke="transparent" data-fill-palette-color="tertiary"/></svg></svg></svg></svg>
    );
}