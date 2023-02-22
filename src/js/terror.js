/**
 * ランダムな英数字を生成する関数
 *
 * @param {number} length - 生成する文字列の長さ
 * @returns {string} ランダムな英数字
 */
function generateRandomString(length) {
    const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

/**
 * 指定されたエレメント内のテキストノードをランダムな文字列に置き換える関数
 *
 * @param {Node} element - 置き換え対象のエレメント
 * @param {number} delay - 置き換えを元に戻すまでの待機時間（ミリ秒）
 */
async function replaceTextWithRandom(element, delay) {
    const textNodes = getTextNodes(element);
    // const originalTexts = textNodes.map((node) => node.textContent);
    for (let i = 0; i < textNodes.length; i++) {
        const textNode = textNodes[i];
        textNode.textContent = generateRandomString(textNode.textContent.length);
    }
    await wait(delay);
}

/**
 * 指定されたエレメント内のテキストノードを取得する関数
 *
 * @param {Node} element - テキストノードを取得する対象のエレメント
 * @returns {Node[]} テキストノードの配列
 */
function getTextNodes(element) {
    const nodes = element.childNodes;
    const textNodes = [];
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.nodeType === Node.TEXT_NODE) {
            textNodes.push(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            textNodes.push(...getTextNodes(node));
        }
    }
    return textNodes;
}

/**
 * 指定された時間待機する関数
 *
 * @param {number} time - 待機時間（ミリ秒）
 * @returns {Promise} 指定された時間待機するPromise
 */
function wait(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

// DOMContentLoadedイベントで実行する
// document.addEventListener("DOMContentLoaded", async () => {
//     const delay = 5000; // 待機時間（ミリ秒）
//     const element = document.body; // 置き換え対象のエレメント
//     await replaceTextWithRandom(element, delay);
// });
