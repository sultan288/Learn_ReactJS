export default function Text({ addEmoji, addBracket }) {
    let text = 'I am JS lan';
    if (addEmoji) {
        text = addEmoji(text, '&');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>;
}
