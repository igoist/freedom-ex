import parser from './parser.js';

/**
 * 以下为分页部分逻辑
 * getClassName ...
 * Pager ...
 * Jump ...
 * renderPager render 函数...
 */

// 用于计算并返回 Pager 的 className
let getClassName = item => {
    const { current, type, target } = item;
    let className = 'pager';
    if (current) {
        className += ' pager--current';
    }
    if (type === 'omni') {
        className += ' pager--omni';
    }
    if (type !== 'omni' && !target) {
        className += ' pager--disabled';
    }
    if (type === 'prevOrNext') {
        className += ' prevOrNext';
    }
    return className;
};


class Pagination {
    constructor(config) {
        const { _current, _total, _inline, _onChange, _paginationList } = config;
        this.state = {
            current: _current,
            total: _total,
            inline: _inline
        };

        if (_paginationList) {
            this.paginationList = _paginationList;
        } else {
            this.paginationList = document.querySelector('.pagination-list');
        }

        if (_onChange) {
            this.state.onChange = () => {
                _onChange(this.state);
            };
        }

        this.render();
    }

    resetState(newStateObj) {
        const { _current, _total, _onChange } = newStateObj;

        if (_current) {
            this.state.current = _current;
        }

        if (_total) {
            this.state.total = _total;
        }

        if (_onChange) {
            this.state.onChange = () => {
                _onChange(this.state);
            };
        }
        this.render();
    }

    renderPager(pages) {
        let fragment = document.createDocumentFragment();

        pages.map(item => {
            if (item) {
                if(item.type !== 'input') {
                    fragment.appendChild(this.Pager(item));
                } else {
                    fragment.appendChild(this.Jump(item));
                }
            }
        });

        this.paginationList.innerHTML = '';
        this.paginationList.appendChild(fragment);
    }


    // 输入跳转
    Jump() {
        let div = document.createElement('div');
        div.className = 'pager pager--jump';
        let tmpInput = document.createElement('input');
        tmpInput.classList.add('pager__input');
        tmpInput.value = this.state.current;
        tmpInput.addEventListener('keyup', e => {
            e.preventDefault();
            if (e.key === 'Enter') {
                const pattern = /^\d+$/g;
                let value = e.target.value.trim();
                if (pattern.test(value)) {
                    if (value <= 0) {
                        value = 0;
                    }

                    if (value > this.state.total) {
                        value = this.state.total;
                    }

                    this.state.current = parseInt(value, 10);
                    let pages = parser.getPages({
                        current: this.state.current,
                        total: this.state.total
                    });

                    // render & request!!
                    this.renderPager(pages);
                    // request();
                    this.state.onChange();
                }
            }
        });
        let tmpSpan = document.createElement('span');
        tmpSpan.classList.add('pager__suffix');
        tmpSpan.textContent = '/ ' + this.state.total + ' 页';
        div.appendChild(tmpInput);
        div.appendChild(tmpSpan);
        return div;
    }

    Pager(item) {
        let className = getClassName(item);

        let div = document.createElement('div');
        div.className = className;
        if (item.target && !item.current) {
            div.addEventListener('click', () => {
                this.state.current = item.target;
                let pages = parser.getPages({
                    current: this.state.current,
                    total: this.state.total,
                    inline: this.state.inline
                });
                // render & request!!
                this.renderPager(pages);
                // request();
                this.state.onChange();
            });
        }
        div.textContent = item.content;
        return div;
    }

    render() {
        let pages = parser.getPages({
            current: this.state.current,
            total: this.state.total,
            inline: this.state.inline
        });

        this.renderPager(pages);
    }
}

export default Pagination;
