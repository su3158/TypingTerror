/**
 * 指定されたエレメント内の文字列を置き換える関数
 * 
 * @param {Node} element - 文字列を置き換える対象のエレメント
 * @param {string} type - 置き換える文字列の種類。"all": 全ての文字列, "en": 英数字のみ
 */
function replaceText(element, type) {
    if (element.nodeType === Node.TEXT_NODE) {
        // テキストノードの場合、置き換える
        const text = element.textContent;
        element.textContent = text.replace(/[A-Za-z0-9]+/g, () => {
            return type === 'en' ? String.fromCharCode(0x0041 + Math.random() * 0x1A) : String.fromCharCode(0x30A1 + Math.random() * 0x3F);
        }).replace(/[^\sA-Za-z0-9]+/g, () => {
            return String.fromCharCode(0xFF00 + Math.random() * 0x5F);
        });
    } else if (element.nodeType === Node.ELEMENT_NODE) {
        // エレメントの場合、子ノードについて再帰的に処理を行う
        for (const child of element.childNodes) {
            replaceText(child, type);
        }
    }
}

/**
 * 指定されたエレメント内の文字列をランダムな文字列に置き換え、一定時間後に元に戻す関数
 * 
 * @param {Node} element - 文字列を置き換える対象のエレメント
 * @param {string} type - 置き換える文字列の種類。"all": 全ての文字列, "en": 英数字のみ
 * @param {number} delay - テキストを元に戻すまでの待機時間（ミリ秒）
 */
function randomizeText(element, delay) {
    let i = 0;
    const interval = setInterval(() => {
        // 置き換えたテキストを1文字ずつランダムな文字に置き換える
        element.textContent = element.textContent.substr(0, i) + String.fromCharCode(0x3042 + Math.random() * 0x3FF) + element.textContent.substr(i + 1);
        i++;
        if (i >= element.textContent.length) {
            clearInterval(interval);
            // 指定した時間（delay）経過後、元の文字列に戻す
            setTimeout(() => {
                revertText(element);
            }, delay);
        }
    }, 50);
}

/**
 * 指定されたエレメント内の文字列を元に戻す関数
 * 
 * @param {Node} element - 元に戻す対象のエレメント
 */
function revertText(element) {
    if (element.nodeType === Node.TEXT_NODE) {
        // テキストノードの場合、元に戻す
        element.textContent = originalTexts[index];
    } else if (element.nodeType === Node.ELEMENT_NODE) {
        // エレメントノードの場合、子ノードについて再帰的に処理を行う
        let index = 0;
        for (const child of element.childNodes) {
            revertText(child);
            index++;
        }
    }
}


// replaceAndRevertText(document.body, "all", 5000);