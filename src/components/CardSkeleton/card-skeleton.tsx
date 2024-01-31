import React from "react"
import Skeleton from "react-loading-skeleton"

export default function CardSkeleton() {
    return (
        <div className="skeleton-container">
        <div className="skeleton-title">
          <Skeleton height={28} width={300} />
        </div>
  
        <ul>
          {Array(8)
            .map((item, index) => (
              <li key={index}>
                <div className="item-group">
                  <div className="skeleton-item">
                    <Skeleton height={20} width={`100%`} />
                  </div>
  
                  <div className="skeleton-item">
                    <Skeleton height={20} width={`100%`} />
                  </div>
                </div>
  
                <div className="item-group">
                  <div className="skeleton-item">
                    <Skeleton height={20} width={`100%`} />
                  </div>
  
                  <div className="skeleton-item">
                    <Skeleton height={20} width={`100%`} />
                  </div>
                </div>
  
                <div className="item-group">
                  <div className="skeleton-item">
                    <Skeleton height={20} width={`100%`} />
                  </div>
  
                  <div className="skeleton-item">
                    <Skeleton height={20} width={`100%`} />
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </div>
    )
}