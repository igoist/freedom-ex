const ETNotification = {};

ETNotification.delay = 2500;
ETNotification.delta = 300;

let handleTransitionend = el => {
    setTimeout(() => {
        el.classList.add('et-notification-fadeOut');

        el.addEventListener('transitionend', e => {
            e.preventDefault();
            el.remove();
        });
    }, ETNotification.delay);
}

ETNotification.success = (text, whole='') => {
    let div = document.createElement('div');
    div.classList.add('et-notification');
    div.classList.add('success');
    if (whole == '') {
        div.innerText = text + '成功';
    } else {
        div.innerText = whole;
    }

    let delay = ETNotification.delay;
    document.body.appendChild(div);

    handleTransitionend(div);
};

ETNotification.error = (text, whole='') => {
    let div = document.createElement('div');
    div.classList.add('et-notification');
    div.classList.add('error');
    if (whole == '') {
        div.innerText = text + '失败';
    } else {
        div.innerText = whole;
    }

    let delay = ETNotification.delay;
    document.body.appendChild(div);
    handleTransitionend(div);
};

ETNotification.warning = (text, whole='') => {
    let div = document.createElement('div');
    div.classList.add('et-notification');
    div.classList.add('warning');
    if (whole == '') {
        div.innerText = text + '警告';
    } else {
        div.innerText = whole;
    }

    let delay = ETNotification.delay;
    document.body.appendChild(div);
    handleTransitionend(div);
};


// const ETNotification2 = {};
{/*<div class="ant-notification-notice ant-notification-notice-closable">
    <div class="ant-notification-notice-content">
        <div class="">
            <div class="ant-notification-notice-message">Notification Title</div>
            <div class="ant-notification-notice-description">I will never close automatically. I will be close automatically. I will never close automatically.</div>
        </div>
    </div>
    <a tabindex="0" class="ant-notification-notice-close">
        <span class="ant-notification-notice-close-x"></span>
    </a>
</div>*/}

ETNotification.notice = (title, text) => {
    let div = document.createElement('div');
    div.classList.add('et-notification2');

    let notice = document.createElement('div');
    notice.classList.add('et-notification-notice');
    // notice.classList.add('et-notification-notice-closable');

    let content = document.createElement('div');
    let msg = document.createElement('div');
    msg.classList.add('et-notification-notice-message');
    msg.innerText = title;
    let desc = document.createElement('div');
    desc.classList.add('et-notification-notice-description');
    desc.innerText = text;
    content.appendChild(msg);
    content.appendChild(desc);

    notice.appendChild(content);
    div.appendChild(notice);

    let delay = ETNotification.delay;
    let delta = ETNotification.delta;
    document.body.appendChild(div);
    setTimeout(() => {
        div.classList.add('et-notification2-fadeOut');
    }, delay);
    setTimeout(() => {
        div.remove();
        div.classList.remove('et-notification2-fadeOut');
    }, delay + delta);
};

export default ETNotification;
