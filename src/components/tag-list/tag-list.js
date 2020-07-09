import React from "react";
import { TweenOneGroup } from 'rc-tween-one';
import { Tag } from "antd";
import s from "./tag-list.module.css";

const TagList = ({ selectedTags, removeTagFromSelected }) => (
    <>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: e => {
              e.target.style = '';
            },
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={true}
        >
          {selectedTags.map(tag => (
            <span key={tag} className={s.item}>
              <Tag
                color="#1E90FF"
                closable
                onClose={e => {
                  e.preventDefault();
                  removeTagFromSelected(tag);
                }}
              >
                {tag}
              </Tag>
            </span>
          ))}
        </TweenOneGroup>
    </>
  );

export default TagList;
